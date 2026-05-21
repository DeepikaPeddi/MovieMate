package com.moviemate.backend.controller;

import com.moviemate.backend.entity.Watchlist;
import com.moviemate.backend.service.WatchlistService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.Authentication;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/watchlist")
@CrossOrigin(origins = "*")
public class WatchlistController {

    @Autowired
    private WatchlistService watchlistService;

    // ADD TO WATCHLIST
    @PostMapping
    public String addToWatchlist(

            @RequestBody Watchlist watchlist,

            Authentication authentication
    ) {

        String email =
                authentication.getName();

        return watchlistService.addToWatchlist(

                watchlist.getMovieId(),

                watchlist.getMovieTitle(),

                watchlist.getPosterPath(),

                email
        );
    }

    // GET WATCHLIST
    @GetMapping
    public List<Watchlist> getWatchlist(

            Authentication authentication
    ) {

        String email =
                authentication.getName();

        return watchlistService.getWatchlist(
                email
        );
    }

    // REMOVE FROM WATCHLIST
    @DeleteMapping("/{watchlistId}")
    public String removeFromWatchlist(

            @PathVariable Long watchlistId
    ) {

        return watchlistService.removeFromWatchlist(
                watchlistId
        );
    }
}