import axios from "axios";

const API =
  "http://localhost:8080/api/movies";

// TRENDING MOVIES
export async function getTrendingMovies(page = 1) {

  return axios.get(
    `${API}/trending?page=${page}`,
    {
      headers: {
        Authorization:
          `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
}

// MOVIES BY LANGUAGE
export async function getMoviesByLanguage(
  language,
  page = 1
) {

  const response = await axios.get(
    `${API}/language?language=${language}&page=${page}`,
    {
      headers: {
        Authorization:
          `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  return response.data;
}

// SEARCH MOVIES
export async function searchMovies(query) {

  const response = await axios.get(
    `${API}/search?query=${query}`,
    {
      headers: {
        Authorization:
          `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  return response.data;
}