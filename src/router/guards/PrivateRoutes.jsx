import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks";

const PrivateRoutes = () => {
	const { currentUser } = useAuth();

	if (!currentUser) {
		return <Navigate to="/login" />;
	}

	if (currentUser?.isVerified) {
		return <Outlet />;
	}

	return <Navigate to="/onboarding" />;
};

export default PrivateRoutes;
