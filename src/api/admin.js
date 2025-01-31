import axios from "./axios";

//Brands
export const createBrand = (formData) =>
	axios.post("/admin/brands", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

export const updateBrand = ({ id, formData }) =>
	axios.put(`/admin/brands/${id}`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

export const getBrand = ({ id }) => axios.get(`/admin/brands/${id}`);

export const deleteBrand = ({ id }) => axios.delete(`/admin/brands/${id}`);
export const getPromotionPrice = () => axios.get("/admin/promotion-prices");

export const createPromotionPrice = ({ price }) =>
	axios.post("/admin/promotion-prices", { price });

export const updatePromotionPrice = ({ price }) =>
	axios.put(`/admin/promotion-prices`, { price });

export const getDashboardData = () => axios.get("/admin/dashboard");
