import axios from "axios";

const BASE_URL =
  "http://localhost:8080/api/auth";

export function signup(userData) {

  return axios.post(`${BASE_URL}/signup`, userData);

}
export function login(userData) {

  return axios.post(`${BASE_URL}/login`, userData);

}