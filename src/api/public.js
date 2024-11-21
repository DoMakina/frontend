import axios from "./axios";

export const fetchCars = () => axios.get("/public/cars");
