import axios from "axios";
import { API_BASE_URL } from "../../config";
import { LoginModel } from "../../models/LoginModel";
import UserRegisterModel from "../../models/UserRegisterModel";

const LOGIN_URL = `${API_BASE_URL}login/`;
const REGISTER_URL = `${API_BASE_URL}register/`;

export async function login(loginData: LoginModel) {
  return await axios
  .post(LOGIN_URL, loginData)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    throw error;
  });
}

export async function registerUser(userData: UserRegisterModel) {
  return await axios
    .post(REGISTER_URL, userData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}
