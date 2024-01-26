import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:5000";

export function signup(userData) {
  delete userData.confirmPassword;
  const response = axios.post(`${BASE_URL}/signup`, userData);
  return response;
}

export function signin(userData) {
  const response = axios.post(`${BASE_URL}/signin`, userData);
  return response;
}

export function userLogged() {
  const response = axios.get(`${BASE_URL}/me`, {
    headers: { Authorization: `Bearer ${Cookies.get("token")}` },
  });

  return response;
}
