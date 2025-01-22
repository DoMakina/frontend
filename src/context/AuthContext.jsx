import { createContext, useState, useEffect } from "react";
import { getUser, logout } from "../api/auth";
import { LoadingIndicator } from "../components/common";
import { useApi } from "../hooks";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const { handleApiCall: handleLogoutApiCall } = useApi(logout);

	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchUser = async () => {
		try {
			const response = await getUser();
			if (response.data) {
				setCurrentUser(response.data);
			} else {
				setCurrentUser(null);
			}
		} catch {
			setCurrentUser(null);
		}
	};

	const handleLogout = async () => {
		await handleLogoutApiCall();
		setCurrentUser(null);
	};

	useEffect(() => {
		const initialFetch = async () => {
			await fetchUser();
			setLoading(false);
		};

		initialFetch();
	}, []);

	const value = {
		currentUser,
		fetchUser,
		logout: handleLogout,
	};

	return (
		<AuthContext.Provider value={value}>
			{loading ? (
				<div className="flex h-screen w-screen items-center justify-center bg-theme-bg">
					<LoadingIndicator />
				</div>
			) : (
				children
			)}
		</AuthContext.Provider>
	);
};

export default AuthContext;
