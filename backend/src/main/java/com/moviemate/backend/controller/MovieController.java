package com.moviemate.backend.controller;

import com.moviemate.backend.service.TmdbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin(origins = "*")
public class MovieController {

    @Autowired
    private TmdbService tmdbService;

    // Trending Movies
    @GetMapping("/trending")
    public String getTrendingMovies(

            @RequestParam(defaultValue = "1")
            int page
    ) {

        return tmdbService.getTrendingMovies("en", page);
    }

    // Movies By Language
    @GetMapping("/language")
    public String getMoviesByLanguage(

            @RequestParam String language,

            @RequestParam(defaultValue = "1")
            int page
    ) {

        return tmdbService.getTrendingMovies(language, page);
    }

    // Search Movies
    @GetMapping("/search")
    public String searchMovies(

            @RequestParam String query
    ) {

        return tmdbService.searchMovies(query);
    }
}