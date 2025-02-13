import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthRoutes, OnboardingRoutes, UserRoutes } from "./guards";
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
	TermsAndConditions,
} from "../pages/public";
import {
	DashboardPage,
	SellCarPage,
	PromotionPage,
} from "../pages/private/user";
import {
	AdminDashboardPage,
	AdminBrandsPage,
	AdminEditBrandPage,
	AdminCreateBrandPage,
} from "../pages/private/admin";
import { CreateAdminPage } from "../pages/private/super-admin";
import { VerifyEmailPage } from "../pages/onboarding";
import AdminRoutes from "./guards/AdminRoutes";
import SuperAdminRoutes from "./guards/SuperAdminRoutes";

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
				<Route
					path="/terms-and-conditions"
					element={<TermsAndConditions />}
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
				<Route path="/" element={<UserRoutes />}>
					<Route path="dashboard" element={<DashboardPage />} />
					<Route path="sell-car" element={<SellCarPage />} />
					<Route path="promotion/:id" element={<PromotionPage />} />
				</Route>

				{/* Add the admin routes */}
				<Route path="/admin" element={<AdminRoutes />}>
					<Route index element={<AdminDashboardPage />} />
					<Route path="create" element={<CreateAdminPage />} />
					<Route path="brands" element={<AdminBrandsPage />} />
					<Route
						path="brands/create"
						element={<AdminCreateBrandPage />}
					/>
					<Route
						path="brands/edit/:id"
						element={<AdminEditBrandPage />}
					/>
				</Route>

				{/* Add the super admin routes */}
				{/* <Route path="/admin" element={<SuperAdminRoutes />}>
					
				</Route> */}

				{/* Add the 404 page */}
				<Route path="*" element={<Error404Page />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterManagement;
