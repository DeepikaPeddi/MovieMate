package com.moviemate.backend.controller;

import com.moviemate.backend.entity.Favorite;
import com.moviemate.backend.service.FavoriteService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.Authentication;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
@CrossOrigin(origins = "*")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    // ADD FAVORITE
    @PostMapping
    public String addFavorite(

            @RequestBody Favorite favorite,

            Authentication authentication
    ) {

        String email =
                authentication.getName();

        return favoriteService.addFavorite(

                favorite.getMovieId(),

                favorite.getMovieTitle(),

                favorite.getPosterPath(),

                email
        );
    }

    // GET FAVORITES
    @GetMapping
    public List<Favorite> getFavorites(

            Authentication authentication
    ) {

        String email =
                authentication.getName();

        return favoriteService.getFavorites(
                email
        );
    }

    // REMOVE FAVORITE
    @DeleteMapping("/{favoriteId}")
    public String removeFavorite(

            @PathVariable Long favoriteId
    ) {

        return favoriteService.removeFavorite(
                favoriteId
        );
    }
}