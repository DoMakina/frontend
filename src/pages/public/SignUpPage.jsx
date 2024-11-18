import { MainLayout } from "../../components/layouts";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../../components/ui";

const initialState = {
	name: {
		value: "",
		error: "",
	},
	surname: {
		value: "",
		error: "",
	},
	username: {
		value: "",
		error: "",
	},
	email: {
		value: "",
		error: "",
	},
	password: {
		value: "",
		error: "",
	},
	confirmPassword: {
		value: "",
		error: "",
	},
	birthDate: {
		value: "",
		error: "",
	},
	acceptTerms: {
		value: false,
		error: "",
	},
};

const SignUpPage = () => {
	const [formState, setFormState] = useState(initialState);

	const resetForm = () => {
		setFormState(initialState);
	};

	const handleSignUp = async (e) => {
		e.preventDefault();

		console.log(formState);

		resetForm();
	};

	return (
		<MainLayout>
			<div className="flex flex-grow items-center justify-center">
				<div className="flex w-full max-w-xl flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 shadow-sm">
					<form
						onSubmit={handleSignUp}
						className="flex w-full max-w-[300px] flex-col items-center justify-center space-y-10"
					>
						<h1 className="text-[26px]">Create your Account</h1>

						<div className="flex w-full flex-col space-y-1.5">
							<div className="flex flex-row space-x-1.5">
								<Input
									type="text"
									placeholder="Name"
									name="name"
									formState={formState}
									setFormState={setFormState}
									required
								/>
								<Input
									type="text"
									placeholder="Surname"
									name="surname"
									formState={formState}
									setFormState={setFormState}
									required
								/>
							</div>

							<Input
								type="text"
								placeholder="Username"
								name="username"
								formState={formState}
								setFormState={setFormState}
								required
							/>

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
							<Input
								type="password"
								placeholder="Confirm Password"
								name="confirmPassword"
								formState={formState}
								setFormState={setFormState}
								required
								passwordIcon
							/>

							<Input
								type="date"
								placeholder="Birth Date"
								name="birthDate"
								formState={formState}
								setFormState={setFormState}
								required
							/>
							<div className="flex w-full flex-row items-center justify-start space-x-1.5">
								<Input
									id="checkbox"
									type="checkbox"
									name="acceptTerms"
									wrapperClassName="w-auto"
									formState={formState}
									setFormState={setFormState}
									required
								/>
								<label htmlFor="checkbox">
									<span className="text-theme-light-gray text-[13px]">
										I accept the
									</span>{" "}
									<Link
										to="/terms"
										className="text-[13px] font-semibold text-theme-blue"
									>
										Terms of Service
									</Link>
								</label>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center space-y-3">
							<Button
								type="submit"
								className="whitespace-nowrap"
								extendClassName
							>
								Sign Up
							</Button>
							<div className="flex flex-row space-x-2">
								<span className="text-theme-light-gray text-[14px]">
									Already have an account?
								</span>
								<Link
									to="/login"
									className="text-[14px] font-semibold text-theme-blue"
								>
									Log In
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</MainLayout>
	);
};

export default SignUpPage;
