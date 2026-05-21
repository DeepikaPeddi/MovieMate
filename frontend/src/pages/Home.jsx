import React, { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

import {
  getTrendingMovies,
  getMoviesByLanguage,
} from "../services/movieService";

import "./Home.css";

function Home() {

  const [trendingMovies, setTrendingMovies]
    = useState([]);

  const [languageMovies, setLanguageMovies]
    = useState([]);

  const [selectedLanguage, setSelectedLanguage]
    = useState("");

  const [showLanguageMovies, setShowLanguageMovies]
    = useState(false);

  const [trendingPage, setTrendingPage]
    = useState(1);

  const [languagePage, setLanguagePage]
    = useState(1);

    const [loadingTrending, setLoadingTrending]
      = useState(false);

    const [loadingLanguage, setLoadingLanguage]
      = useState(false);

  const languages = [

    { code: "en", name: "English" },
    { code: "te", name: "Telugu" },
    { code: "ta", name: "Tamil" },
    { code: "hi", name: "Hindi" },
    { code: "ml", name: "Malayalam" },
    { code: "kn", name: "Kannada" },
    { code: "mr", name: "Marathi" },
    { code: "pa", name: "Punjabi" },
    { code: "ko", name: "Korean" },
    { code: "ja", name: "Japanese" },

  ];

  // TRENDING MOVIES
  async function fetchTrendingMovies(
    page = 1
  ) {

    try {

      setLoadingTrending(true);

      const response =
        await getTrendingMovies(page);

      if (page === 1) {

        setTrendingMovies(
          response.data.results || []
        );

      } else {

        setTrendingMovies((prev) => [

          ...prev,

          ...(response.data.results || [])

        ]);
      }

    } catch (error) {

      console.log(error);

    } finally {

      setLoadingTrending(false);
    }
  }

  // LANGUAGE MOVIES
  async function fetchMoviesByLanguage(
    language,
    page = 1
  ) {

    try {

      setLoadingLanguage(true);

      const data =
        await getMoviesByLanguage(
          language,
          page
        );

      if (page === 1) {

        setLanguageMovies(
          data.results || []
        );

      } else {

        setLanguageMovies((prev) => [

          ...prev,

          ...(data.results || [])

        ]);
      }

    } catch (error) {

      console.log(error);

      setLanguageMovies([]);

    } finally {

      setLoadingLanguage(false);
    }
  }
  // LANGUAGE CHANGE
  async function handleLanguageChange(e) {

    const language = e.target.value;

    setSelectedLanguage(language);

    setShowLanguageMovies(true);

    setLanguagePage(1);

    localStorage.setItem(
      "selectedLanguage",
      language
    );

    if (!language) {

      setLanguageMovies([]);

      return;
    }

    fetchMoviesByLanguage(
      language,
      1
    );
  }

  // LOAD MORE TRENDING
  async function loadMoreTrending() {

    const nextPage =
      trendingPage + 1;

    setTrendingPage(nextPage);

    fetchTrendingMovies(nextPage);
  }

  // LOAD MORE LANGUAGE MOVIES
  async function loadMoreLanguageMovies() {

    const nextPage =
      languagePage + 1;

    setLanguagePage(nextPage);

    fetchMoviesByLanguage(
      selectedLanguage,
      nextPage
    );
  }

  // INITIAL LOAD
  useEffect(() => {

    fetchTrendingMovies();

  }, []);

  // LOAD SAVED LANGUAGE
  useEffect(() => {

    const savedLanguage =
      localStorage.getItem(
        "selectedLanguage"
      );

    if (savedLanguage) {

      setSelectedLanguage(savedLanguage);

      setShowLanguageMovies(true);

      fetchMoviesByLanguage(
        savedLanguage,
        1
      );
    }

  }, []);

  return (

    <div className="home">

      {/* LANGUAGE SECTION */}

      <section className="section">

        <h1>Browse by Language</h1>

        <div className="controls">

          <select
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >

            <option value="">
              Select Language
            </option>

            {languages.map((language) => (

              <option
                key={language.code}
                value={language.code}
              >

                {language.name}

              </option>

            ))}

          </select>

        </div>

        {

          showLanguageMovies && (

            languageMovies.length === 0 ? (

              <p>No movies found</p>

            ) : (

              <>
            {

              loadingLanguage && (

                <p className="loading-text">
                  Loading movies...
                </p>

              )

            }
                <div className="movie-grid">

                  {

                    languageMovies.map((movie) => (

                      <MovieCard
                        key={movie.id}
                        movie={movie}
                      />

                    ))

                  }

                </div>

                <button
                  className="load-more-btn"
                  onClick={
                    loadMoreLanguageMovies
                  }
                >

                  Load More

                </button>

              </>

            )

          )

        }

      </section>

      {/* TRENDING SECTION */}

      <section className="section">

        <h1>Trending Movies</h1>
{

  loadingTrending && (

    <p className="loading-text">
      Loading trending movies...
    </p>

  )

}
        <div className="movie-grid">

          {

            trendingMovies.map((movie) => (

              <MovieCard
                key={movie.id}
                movie={movie}
              />

            ))

          }

        </div>

        <button
          className="load-more-btn"
          onClick={loadMoreTrending}
        >

          Load More

        </button>

      </section>

    </div>
  );
}

export default Home;