import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

const AuthRoutes = () => {
	const { currentUser } = useAuth();

	if (!currentUser) {
		return <Outlet />;
	}

	if (currentUser?.isVerified) {
		return <Navigate to="/dashboard" />;
	}

	return <Navigate to="/onboarding" />;
};

export default AuthRoutes;
