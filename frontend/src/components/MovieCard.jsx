import "../styles/MovieCard.css";

import {
  addFavorite
} from "../services/favoriteService";

import {
  addToWatchlist
} from "../services/watchlistService";
import { toast } from "react-toastify";

function MovieCard({
  movie,
  showFavoriteButton = true,
  onRemove
}) {

  // FAVORITE
  async function handleFavorite() {

    try {

      const favoriteMovie = {

        movieId: movie.id,

        movieTitle:
          movie.title || movie.movieTitle,

        posterPath:
          movie.poster_path || movie.posterPath

      };

      const response =
        await addFavorite(
          favoriteMovie
        );

      toast.success(response);

    } catch (error) {

      console.log(error);
      toast.error("Something went wrong");
    }
  }

  // WATCHLIST
  async function handleWatchlist() {

    try {

      const watchlistMovie = {

        movieId: movie.id,

        movieTitle:
          movie.title || movie.movieTitle,

        posterPath:
          movie.poster_path || movie.posterPath

      };

      const response =
        await addToWatchlist(
          watchlistMovie
        );
       toast.success(response);

    } catch (error) {

      console.log(error);
      toast.error("Something went wrong");
    }
  }

  const imagePath =
    movie.poster_path || movie.posterPath;

  const imageUrl = imagePath

    ? `https://image.tmdb.org/t/p/w500${imagePath}`

    : "https://via.placeholder.com/300x450?text=No+Image";

  return (

    <div className="movie-card">

      <img
        src={imageUrl}
        alt={
          movie.title ||
          movie.movieTitle
        }
        loading="lazy"
      />

      <h3>

        {

          movie.title ||
          movie.movieTitle

        }

      </h3>

      {

        movie.vote_average && (

          <p>

            ⭐ {movie.vote_average}

          </p>

        )

      }

      {

        movie.release_date && (

          <p>

            Release:
            {movie.release_date}

          </p>

        )

      }

      {

        movie.overview && (

          <p>

            {

              movie.overview.slice(
                0,
                100
              )

            }...

          </p>

        )

      }

      {

        showFavoriteButton ? (

          <button
            onClick={handleFavorite}
          >

            Favorite

          </button>

        ) : (

          <button

            onClick={() =>
              onRemove(
                movie.id ||
                movie.favoriteId
              )
            }

          >

            Remove

          </button>

        )

      }

      <button
        onClick={handleWatchlist}
      >

        Watchlist

      </button>

    </div>
  );
}

export default MovieCard;