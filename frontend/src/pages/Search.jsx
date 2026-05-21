import React, { useState } from "react";

import MovieCard from "../components/MovieCard";

import { searchMovies }
from "../services/movieService";

import "./Search.css";
import "./Home.css";

function Search() {

  const [searchQuery, setSearchQuery]
    = useState("");

  const [searchResults, setSearchResults]
    = useState([]);

  const [isSearching, setIsSearching]
    = useState(false);

  const [loading, setLoading]
    = useState(false);

  async function handleSearch() {

    // EMPTY SEARCH PREVENTION
    if (!searchQuery.trim()) {

      setSearchResults([]);

      setIsSearching(false);

      return;
    }

    try {

      setLoading(true);

      const data =
        await searchMovies(searchQuery);

      // LIMIT RESULTS TO 10
      setSearchResults(
        (data.results || []).slice(0, 10)
      );

      setIsSearching(true);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  }

  return (

    <div className="search-page">

      {/* SEARCH BAR */}

      <div className="search-container">

        <input
          type="text"
          placeholder="Search movies..."
          value={searchQuery}

          onChange={(e) =>
            setSearchQuery(e.target.value)
          }
        />

        <button
          onClick={handleSearch}
          disabled={loading}
        >

          {

            loading
              ? "Searching..."
              : "Search"

          }

        </button>

      </div>

      {/* INITIAL MESSAGE */}

      {

        !isSearching && !loading && (

          <p className="search-empty">

            Search for your favorite movies

          </p>

        )

      }

      {/* LOADING */}

      {

        loading && (

          <p className="loading-text">

            Searching movies...

          </p>

        )

      }

      {/* SEARCH RESULTS */}

      {

        isSearching && !loading && (

          <section className="section">

            <h1 className="search-title">

              Search Results

            </h1>

            {

              searchResults.length === 0 ? (

                <p className="search-empty">

                  No movies found

                </p>

              ) : (

                <div className="movie-grid">

                  {

                    searchResults.map((movie) => (

                      <MovieCard
                        key={movie.id}
                        movie={movie}
                      />

                    ))

                  }

                </div>

              )

            }

          </section>

        )

      }

    </div>
  );
}

export default Search;