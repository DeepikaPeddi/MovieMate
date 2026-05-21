package com.moviemate.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class TmdbService {

    @Autowired
    private RestTemplate restTemplate;

    @Value("${tmdb.api.key}")
    private String apiKey;

    @Value("${tmdb.base.url}")
    private String baseUrl;

    // Trending Movies
    public String getTrendingMovies(String language, int page) {

        String url =
                baseUrl
                        + "/discover/movie?api_key="
                        + apiKey
                        + "&with_original_language="
                        + language
                        + "&sort_by=popularity.desc"
                        + "&page="
                        + page;

        System.out.println("TMDB URL: " + url);

        try {

            HttpHeaders headers = new HttpHeaders();

            headers.set("Accept", "application/json");
            headers.set("User-Agent", "Mozilla/5.0");

            HttpEntity<String> entity =
                    new HttpEntity<>(headers);

            ResponseEntity<String> response =
                    restTemplate.exchange(
                            url,
                            HttpMethod.GET,
                            entity,
                            String.class
                    );

            return response.getBody();

        } catch (Exception e) {

            e.printStackTrace();

            return "{\"results\":[]}";
        }
    }

    // Search Movies
    public String searchMovies(String query) {

        String url = baseUrl
                + "/search/movie?query="
                + query
                + "&api_key="
                + apiKey;

        return restTemplate.getForObject(
                url,
                String.class
        );
    }
}