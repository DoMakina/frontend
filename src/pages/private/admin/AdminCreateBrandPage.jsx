import { MainLayout } from "../../../components/layouts";
import { Button, Input } from "../../../components/ui";
import { createBrand } from "../../../api/admin";
import { useState } from "react";
import { useApi } from "../../../hooks";
import { useNavigate } from "react-router-dom";

const initialState = {
	brandName: { value: "", error: "" },
	photos: { value: [], error: "" },
};

const AdminCreateBrandPage = () => {
	const { handleApiCall: createBrandApiCall, loading: loadingCreateBrand } =
		useApi(createBrand, {
			onValidationError: (error) => {
				setFormState((prev) => {
					const newState = { ...prev };
					error.forEach((err) => {
						newState[err.path].error = err.msg;
					});

					return newState;
				});
			},
		});

	const navigate = useNavigate();

	const [formState, setFormState] = useState(initialState);

	const resetForm = () => {
		setFormState(initialState);
	};

	const clearErrors = () => {
		setFormState((prev) => {
			const newState = { ...prev };
			Object.keys(newState).forEach((key) => {
				newState[key].error = "";
			});

			return newState;
		});
	};

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		const maxSize = 5 * 1024 * 1024; // 5MB max size

		if (file.size > maxSize) {
			alert("File is too large. Max size is 5MB.");
			return;
		}

		setFormState((prev) => ({
			...prev,
			photos: { value: [file], error: "" },
		}));
	};

	const handleCreateBrand = async (e) => {
		e.preventDefault();
		if (loadingCreateBrand) return;
		clearErrors();

		const { brandName, photos } = formState;

		const formData = new FormData();

		formData.append("brandName", brandName.value);
		photos.value.forEach((photo) => {
			formData.append("images", photo);
		});

		const response = await createBrandApiCall(formData);
		if (response) {
			resetForm();
			navigate("/brands");
		}
	};

	return (
		<MainLayout>
			<div className="flex flex-grow items-center justify-center">
				<div className="flex w-full max-w-xl flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 shadow-sm">
					<form
						onSubmit={handleCreateBrand}
						className="flex w-full max-w-[300px] flex-col items-center justify-center space-y-10"
					>
						<div className="flex flex-col items-center justify-center space-y-1">
							<h1 className="text-[26px]">Create Brand</h1>
							<p className="text-[13px] text-theme-light-gray">
								Please provide the details the new brand.
							</p>
						</div>
						<div className="flex w-full flex-col space-y-1.5">
							<Input
								type="text"
								placeholder="Brand Name"
								name="brand name"
								formState={formState}
								setFormState={setFormState}
								required
								minLength={2}
								maxLength={50}
							/>
							<div className="flex flex-col space-y-2">
								<label className="text-sm text-theme-text">
									Upload Photo
								</label>
								<input
									type="file"
									accept="image/*"
									onChange={handleImageUpload}
									className="file:bg-theme-primary hover:file:bg-theme-primary-dark w-full text-sm text-theme-text file:mr-4 file:rounded-full file:border-0 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
								/>
								{formState.photos.value.length > 0 && (
									<div className="mt-2 flex flex-wrap gap-2">
										{formState.photos.value.map(
											(photo, index) => (
												<img
													key={index}
													src={URL.createObjectURL(
														photo,
													)} // Create URL from File object
													alt={`Uploaded car photo ${index + 1}`}
													className="h-20 w-20 rounded object-cover"
												/>
											),
										)}
									</div>
								)}
							</div>
						</div>
						<Button type="submit" className="w-full">
							Create Brand
						</Button>
					</form>
				</div>
			</div>
		</MainLayout>
	);
};

export default AdminCreateBrandPage;
