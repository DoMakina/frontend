import axios from "./axios";
export const createPromotion = ({
	carId,
	promotionDays,
	cardNumber,
	cardName,
	expiryDate,
	cvv,
}) =>
	axios.post(`/private/promotions`, {
		carId,
		promotionDays,
		cardNumber,
		cardName,
		expiryDate,
		cvv,
	});

export const getCars = () => axios.get("/private/cars");
export const deleteCar = ({ id }) => axios.delete(`/private/cars/${id}`);
export const createCar = (formData) =>
	axios.post("/private/cars", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
