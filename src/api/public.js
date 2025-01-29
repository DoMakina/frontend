import axios from "./axios";

export const getCar = (id) => axios.get(`/public/cars/${id}`);

export const fetchCars = () => axios.get("/public/cars");
export const fetchFiveLatestPromotionCars = () =>
  axios.get("/public/cars/latest-promotions");