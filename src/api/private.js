import axios from "./axios";

export const getCars = () => axios.get("/private/cars");
export const deleteCar = ({ id }) => axios.delete(`/private/cars/${id}`);
export const createCar = (formData) =>
	axios.post("/private/cars", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
