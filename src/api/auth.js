import axios from "./axios";

export const login = ({ email, password }) => {
	return axios.post("/auth/login", { email, password });
};

export const signUp = ({ email, password }) => {
	return axios.post("/auth/sign-up", { email, password });
};

export const forgotPassword = ({ email }) => {
	return axios.post("/auth/forgot-password", { email });
};

export const resetPassword = ({ password, token }) => {
	return axios.post(`/auth/reset-password/${token}`, { password });
};

export const verifyEmail = ({ token }) => {
	return axios.post(`/auth/verify-email/${token}`);
};

export const resendVerificationEmail = () => {
	return axios.post("/auth/resend-verification-email");
};

export const logout = () => {
	return axios.post("/auth/logout");
};

export const getUser = () => {
	return axios.get("/auth/user");
};
