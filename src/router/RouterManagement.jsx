import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoutes, OnboardingRoutes, PrivateRoutes } from "./guards";
import {
	Error404Page,
	HomePage,
	LoginPage,
	SignUpPage,
	ForgotPasswordPage,
	ResetPasswordPage,
	VerifyEmailTokenPage,
	SearchPage,
	CarPage,
	WishlistPage,
} from "../pages/public";
import { VerifyEmailPage } from "../pages/onboarding";
import { DashboardPage, SellCarPage } from "../pages/private";

const RouterManagement = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Add the public routes */}
				<Route path="/" element={<HomePage />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/car/:id" element={<CarPage />} />
				<Route path="/wishlist" element={<WishlistPage />} />
				<Route
					path="/reset-password/:token"
					element={<ResetPasswordPage />}
				/>
				<Route
					path="/verify-email/:token"
					element={<VerifyEmailTokenPage />}
				/>
				<Route path="/wishlist" element={<WishlistPage />} />

				{/* Add the auth routes */}
				<Route path="/" element={<AuthRoutes />}>
					<Route path="login" element={<LoginPage />} />
					<Route path="sign-up" element={<SignUpPage />} />
					<Route
						path="forgot-password"
						element={<ForgotPasswordPage />}
					/>
				</Route>

				{/* Add the onboarding routes */}
				<Route path="/onboarding" element={<OnboardingRoutes />}>
					<Route index element={<VerifyEmailPage />} />
				</Route>

				{/* Add the private routes */}
				<Route path="/" element={<PrivateRoutes />}>
					<Route path="dashboard" element={<DashboardPage />} />
					<Route path="sell-car" element={<SellCarPage />} />
				</Route>

				{/* Add the 404 page */}
				<Route path="*" element={<Error404Page />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterManagement;
