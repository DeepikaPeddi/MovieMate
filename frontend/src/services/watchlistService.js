import axios from "axios";

const BASE_URL =
  "http://localhost:8080/api/watchlist";

// ADD WATCHLIST
export async function addToWatchlist(movie) {

  const token =
    localStorage.getItem("token");

  const response = await axios.post(

    BASE_URL,

    movie,

    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }

  );

  return response.data;
}

// GET WATCHLIST
export async function getWatchlist() {

  const token =
    localStorage.getItem("token");

  const response = await axios.get(

    BASE_URL,

    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }

  );

  return response.data;
}

// REMOVE WATCHLIST
export async function removeWatchlist(id) {

  const token =
    localStorage.getItem("token");

  const response = await axios.delete(

    `${BASE_URL}/${id}`,

    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }

  );

  return response.data;
}