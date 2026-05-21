import React, { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

import "./Favorites.css";
import {
  getFavorites,
  removeFavorite
} from "../services/favoriteService";
function Favorites() {
async function handleRemove(id) {

  try {

    await removeFavorite(id);

    setFavorites(

      favorites.filter(
        (movie) => movie.id !== id
      )

    );

    console.log("Removed favorite");

  } catch (error) {

    console.log(error);
  }
}
  const [favorites, setFavorites]
    = useState([]);

  async function fetchFavorites() {

    try {

      const data = await getFavorites();

      setFavorites(data);

    } catch (error) {

      console.log(error);
    }
  }

  useEffect(() => {

    fetchFavorites();

  }, []);

  return (

    <div className="favorites-page">

      <h1>Your Favorite Movies</h1>

      {

        favorites.length === 0 ? (

          <p className="empty-text">

            No favorite movies added yet.

          </p>

        ) : (

          <div className="movie-grid">

            {

              favorites.map((movie) => (

                <MovieCard
                  key={movie.id || movie.favoriteId}
                  movie={movie}
                  showFavoriteButton={false}
                  onRemove={handleRemove}
                  pageType="favorites"
                />

              ))

            }

          </div>

        )

      }

    </div>
  );
}

export default Favorites;