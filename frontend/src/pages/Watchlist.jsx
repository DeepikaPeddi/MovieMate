import React, {
  useEffect,
  useState
} from "react";

import MovieCard
  from "../components/MovieCard";

import {
  getWatchlist,
  removeWatchlist
} from "../services/watchlistService";

import "./Watchlist.css";

function Watchlist() {

  const [watchlist, setWatchlist]
    = useState([]);

  async function fetchWatchlist() {

    try {

      const data =
        await getWatchlist();

      setWatchlist(data);

    } catch (error) {

      console.log(error);
    }
  }

  async function handleRemove(id) {

    try {

      await removeWatchlist(id);

      setWatchlist(

        watchlist.filter(
          (movie) =>
            movie.id !== id
        )

      );

    } catch (error) {

      console.log(error);
    }
  }

  useEffect(() => {

    fetchWatchlist();

  }, []);

  return (

    <div className="watchlist-page">

      <h1>Your Watchlist</h1>

      {

        watchlist.length === 0 ? (

          <p className="empty-text">

            No watchlist movies yet.

          </p>

        ) : (

          <div className="movie-grid">

            {

              watchlist.map((movie) => (

                <MovieCard

                  key={movie.id || movie.watchlistId}

                  movie={movie}

                  showFavoriteButton={false}

                  onRemove={handleRemove}

                  pageType="watchlist"

                />

              ))

            }

          </div>

        )

      }

    </div>
  );
}

export default Watchlist;