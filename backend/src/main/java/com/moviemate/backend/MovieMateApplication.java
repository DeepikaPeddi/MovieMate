package com.moviemate.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieMateApplication {

	public static void main(String[] args) {
		SpringApplication.run(MovieMateApplication.class, args);

		System.out.println("MovieMate backend is running on http://localhost:8080");
	}
}