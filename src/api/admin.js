import axios from "./axios";

//Brands
export const createBrand = (formData) =>
	axios.post("/admin/brands", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

export const updateBrand = (id, formData) =>
	axios.post(`/admin/brands/${id}`, formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

export const getBrand = ({ id }) => axios.get(`/admin/brands/${id}`);

export const deleteBrand = ({ id }) => axios.delete(`/admin/brands/${id}`);
