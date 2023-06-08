import { Navigate } from "react-router-dom";
import Login from "./components/auth/Login";

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
};

function getToken() {
  return localStorage.getItem("token");
}

export function authCheck(component) {
  return getToken() ? component : <Navigate to="/" />;
}

export function isLogged() {
  return getToken() ? <Navigate to="/dashboard" /> : <Login />;
}