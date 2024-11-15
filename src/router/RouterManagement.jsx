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
} from "../pages/public";
import { VerifyEmailPage } from "../pages/onboarding";
import {} from "../pages/private";

const RouterManagement = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* Add the public routes */}
				<Route path="/" element={<HomePage />} />
				<Route
					path="/reset-password/:token"
					element={<ResetPasswordPage />}
				/>
				<Route
					path="/verify-email/:token"
					element={<VerifyEmailTokenPage />}
				/>

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
				<Route path="/" element={<PrivateRoutes />}></Route>

				<Route path="*" element={<Error404Page />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterManagement;
