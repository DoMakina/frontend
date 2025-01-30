import { MainLayout } from "../../../components/layouts";
import { Button, Input } from "../../../components/ui";
import { updateBrand, getBrand } from "../../../api/admin";
import { useState, useEffect } from "react";
import { useApi } from "../../../hooks";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
	brandName: { value: "", error: "" },
	icon: { value: null, error: "" },
};

const AdminEditBrandPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [formState, setFormState] = useState(initialState);

	const { handleApiCall: updateBrandApiCall, loading: loadingUpdateBrand } =
		useApi(updateBrand, {
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

	const { handleApiCall: getBrandApiCall, loading: loadingGetBrand } =
		useApi(getBrand);

	useEffect(() => {
		const fetchBrand = async () => {
			if (loadingGetBrand) return;
			const brand = await getBrandApiCall({ id });
			if (brand) {
				setFormState({
					brandName: { value: brand.name, error: "" },
					icon: { value: brand.iconUrl, error: "" },
				});
			}
		};
		fetchBrand();
	}, [id]);

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
			icon: { value: file, error: "" },
		}));
	};

	const handleUpdateBrand = async (e) => {
		e.preventDefault();
		if (loadingUpdateBrand) return;
		clearErrors();

		const { brandName, icon } = formState;

		const formData = new FormData();
		formData.append("brandName", brandName.value);
		if (icon.value) {
			formData.append("icon", icon.value);
		}

		const response = await updateBrandApiCall(id, formData);
		if (response) {
			navigate("/brands");
		}
	};

	return (
		<MainLayout>
			<div className="flex flex-grow items-center justify-center">
				<div className="flex w-full max-w-xl flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 shadow-sm">
					<form
						onSubmit={handleUpdateBrand}
						className="flex w-full max-w-[300px] flex-col items-center justify-center space-y-10"
					>
						<div className="flex flex-col items-center justify-center space-y-1">
							<h1 className="text-[26px]">Edit Brand</h1>
							<p className="text-[13px] text-theme-light-gray">
								Please update the details of the brand.
							</p>
						</div>
						<div className="flex w-full flex-col space-y-1.5">
							<Input
								type="text"
								placeholder="Brand Name"
								name="brandName"
								formState={formState}
								setFormState={setFormState}
								required
								minLength={2}
								maxLength={50}
							/>
							<div className="flex flex-col space-y-2">
								<label className="text-sm text-theme-text">
									Upload New Icon
								</label>
								<input
									type="file"
									accept="image/*"
									multiple={false}
									onChange={handleImageUpload}
									className="file:bg-theme-primary hover:file:bg-theme-primary-dark w-full text-sm text-theme-text file:mr-4 file:rounded-full file:border-0 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
								/>
								{formState.icon.value && (
									<div className="mt-2">
										<img
											src={
												typeof formState.icon.value ===
												"string"
													? formState.icon.value
													: URL.createObjectURL(
															formState.icon
																.value,
														)
											}
											alt="Brand Icon"
											className="h-20 w-20 rounded object-cover"
										/>
									</div>
								)}
							</div>
						</div>
						<Button type="submit" className="w-full">
							Update Brand
						</Button>
					</form>
				</div>
			</div>
		</MainLayout>
	);
};

export default AdminEditBrandPage;
