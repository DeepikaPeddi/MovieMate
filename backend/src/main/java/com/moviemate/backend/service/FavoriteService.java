package com.moviemate.backend.service;

import com.moviemate.backend.entity.Favorite;
import com.moviemate.backend.entity.User;
import com.moviemate.backend.repository.FavoriteRepository;
import com.moviemate.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private UserRepository userRepository;

    // Add Favorite
    public String addFavorite(Long movieId,
                              String movieTitle,
                              String posterPath,
                              String email) {

        User user =
                userRepository
                        .findByEmail(email)
                        .orElse(null);

        if (user == null) {

            return "User not found!";
        }

        List<Favorite> favorites =
                favoriteRepository.findByUser(user);

        boolean alreadyExists =
                favorites.stream()

                        .anyMatch(f ->
                                f.getMovieId()
                                        .equals(movieId)
                        );

        if (alreadyExists) {

            return "Movie already in favorites!";
        }

        Favorite favorite =
                new Favorite();

        favorite.setMovieId(movieId);

        favorite.setMovieTitle(movieTitle);

        favorite.setPosterPath(posterPath);

        favorite.setUser(user);

        favoriteRepository.save(favorite);

        return "Movie added to favorites!";
    }
    // Get Favorites
    public List<Favorite> getFavorites(String email) {

        User user = userRepository.findByEmail(email).orElse(null);

        if (user == null) {
            return null;
        }

        return favoriteRepository.findByUser(user);
    }
    // Remove Favorite
    public String removeFavorite(Long favoriteId) {

        if (!favoriteRepository.existsById(favoriteId)) {
            return "Favorite movie not found!";
        }

        favoriteRepository.deleteById(favoriteId);

        return "Favorite movie removed!";
    }
}