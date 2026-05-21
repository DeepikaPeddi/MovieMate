package com.moviemate.backend.service;

import com.moviemate.backend.entity.User;
import com.moviemate.backend.entity.Watchlist;
import com.moviemate.backend.repository.UserRepository;
import com.moviemate.backend.repository.WatchlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WatchlistService {

    @Autowired
    private WatchlistRepository watchlistRepository;

    @Autowired
    private UserRepository userRepository;

    // Add Movie To Watchlist
    public String addToWatchlist(Long movieId,
                                 String movieTitle,
                                 String posterPath,
                                 String email) {

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            return "User not found!";
        }
        List<Watchlist> watchlists =
                watchlistRepository.findByUser(user);

        boolean alreadyExists = watchlists.stream()

                .anyMatch(w ->
                        w.getMovieId()
                                .equals(movieId)
                );

        if (alreadyExists) {

            return "Movie already in watchlist!";
        }
        Watchlist watchlist = new Watchlist();

        watchlist.setMovieId(movieId);
        watchlist.setMovieTitle(movieTitle);
        watchlist.setPosterPath(posterPath);
        watchlist.setUser(user);

        watchlistRepository.save(watchlist);

        return "Movie added to watchlist!";
    }

    // Get Watchlist
    public List<Watchlist> getWatchlist(String email) {

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            return null;
        }

        return watchlistRepository.findByUser(user);
    }

    // Remove Watchlist Movie
    public String removeFromWatchlist(Long watchlistId) {

        if (!watchlistRepository.existsById(watchlistId)) {
            return "Watchlist movie not found!";
        }

        watchlistRepository.deleteById(watchlistId);

        return "Movie removed from watchlist!";
    }
}