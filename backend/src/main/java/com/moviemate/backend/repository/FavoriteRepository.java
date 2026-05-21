package com.moviemate.backend.repository;

import com.moviemate.backend.entity.Favorite;
import com.moviemate.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    List<Favorite> findByUser(User user);

}