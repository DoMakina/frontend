import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

const OnboardingRoutes = () => {
	const { currentUser } = useAuth();

	if (!currentUser) {
		return <Navigate to="/login" />;
	}

	if (currentUser?.isVerified) {
		return <Navigate to="/dashboard" />;
	}

	return <Outlet />;
};

export default OnboardingRoutes;
