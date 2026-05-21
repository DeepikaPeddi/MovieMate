import axios from "axios";

const BASE_URL =
  "http://localhost:8080/api/favorites";

// ADD FAVORITE
export async function addFavorite(movie) {

  const token = localStorage.getItem("token");

  const response = await axios.post(

    BASE_URL,

    movie,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

// GET FAVORITES
export async function getFavorites() {

  const token = localStorage.getItem("token");

  const response = await axios.get(

    BASE_URL,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

// REMOVE FAVORITE
export async function removeFavorite(id) {

  const token = localStorage.getItem("token");

  const response = await axios.delete(

    `${BASE_URL}/${id}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}