import axios from "axios";
import { API_BASE_URL } from "../../config";
import UserRegisterModel from "../../models/UserRegisterModel";

const REGISTER_URL = `${API_BASE_URL}register/`;

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
