import { Input, Button } from "../../components/ui";
import { MainLayout } from "../../components/layouts";
import { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
	email: {
		value: "",
		error: "",
	},
	password: {
		value: "",
		error: "",
	},
};

const LoginPage = () => {
	const [formState, setFormState] = useState(initialState);

	const resetForm = () => {
		setFormState(initialState);
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		resetForm();
	};

	return (
		<MainLayout>
			<div className="flex flex-grow items-center justify-center">
				<div className="flex w-full max-w-xl flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 shadow-sm">
					<form
						onSubmit={handleLogin}
						className="flex w-full max-w-[300px] flex-col items-center justify-center space-y-10"
					>
						<div className="flex flex-col items-center justify-center space-y-1">
							<h1 className="text-[26px]">Welcome back!</h1>
							<p className="text-theme-light-gray text-[13px]">
								Please log in with your details.
							</p>
						</div>
						<div className="flex w-full flex-col space-y-1.5">
							<Input
								type="email"
								placeholder="Email"
								name="email"
								formState={formState}
								setFormState={setFormState}
								required
							/>
							<Input
								type="password"
								placeholder="Password"
								name="password"
								formState={formState}
								setFormState={setFormState}
								required
								passwordIcon
							/>
							<Link
								to="/forgot-password"
								className="self-end text-[13px] font-semibold"
							>
								Forgot Password?
							</Link>
						</div>
						<div className="flex flex-col items-center justify-center space-y-3">
							<Button
								type="submit"
								className="whitespace-nowrap"
								extendClassName
							>
								Log In
							</Button>
							<div className="flex flex-row space-x-2">
								<span className="text-theme-light-gray text-[14px]">
									Don&apos;t have an account?
								</span>
								<Link
									to="/sign-up"
									className="text-[14px] font-semibold text-theme-blue"
								>
									Sign Up
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</MainLayout>
	);
};

export default LoginPage;
