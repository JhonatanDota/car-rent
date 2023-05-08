import axios from "axios";
import { API_BASE_URL } from "../../config";

const CARS_URL = `${API_BASE_URL}cars/`;

export async function getCars() {
  const response = await axios.get(`${CARS_URL}`);
  return response.data;
}

export async function getCarById(id: number) {
  const response = await axios.get(`${CARS_URL}${id}`);
  return response;
}

export async function getNextRentDaysByCarId(id: number) {
  const response = await axios.get(`${CARS_URL}${id}/nexts-rent-days`);
  return response;
}

export async function getCarsByPage(url: string) {
  const response = await axios.get(url);
  return response.data;
}