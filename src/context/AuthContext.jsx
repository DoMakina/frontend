import { createContext, useState, useEffect } from "react";
// import { getUser, logout } from "../api/auth";
import { LoadingIndicator } from "../components/common";
import { LocalStorageUtils } from "../utils";
const AuthContext = createContext();

// not logged in currentUser = null
// logged in but not verified currentUser = { email: "email", isVerified: false }
// logged in and verified currentUser = { email: "email", isVerified: true }

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchUser = async () => {
		// try {
		// 	const response = await getUser();
		// 	if (response.data) {
		// 		setCurrentUser(response.data);
		// 	} else {
		// 		setCurrentUser(null);
		// 	}
		// } catch {
		// 	setCurrentUser(null);
		// }

		const user = LocalStorageUtils.getItem("user");
		setCurrentUser(user);
	};

	const handleLogout = async () => {
		// try {
		// 	await logout();
		// } catch {
		// 	console.error("Failed to logout");
		// }
		// setCurrentUser(null);

		LocalStorageUtils.removeItem("user");
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
