import { MainLayout } from "../../components/layouts";
import { Button, Input, TextArea } from "../../components/ui";
import { useState } from "react";
import { CarBrands } from "../../data";
import { useAuth } from "../../hooks";
import { v4 as uuidv4 } from "uuid";
import { LocalStorageUtils } from "../../utils";

const initialState = {
	name: { value: "", error: "" },
	brand: { value: "", error: "" },
	model: { value: "", error: "" },
	year: { value: "", error: "" },
	price: { value: "", error: "" },
	description: { value: "", error: "" },
	photos: { value: [], error: "" },
};

const SellCarPage = () => {
	const [formState, setFormState] = useState(initialState);
	const { currentUser } = useAuth();

	const resetForm = () => {
		setFormState(initialState);
	};

	const handleImageUpload = (e) => {
		const files = Array.from(e.target.files);
		const readers = files.map((file) => {
			return new Promise((resolve) => {
				const reader = new FileReader();
				reader.onload = (e) => resolve(e.target.result);
				reader.readAsDataURL(file);
			});
		});

		Promise.all(readers).then((images) => {
			setFormState((prev) => ({
				...prev,
				photos: { value: [...prev.photos.value, ...images], error: "" },
			}));
		});
	};

	const handleSellCar = async (e) => {
		e.preventDefault();

		const newCar = {
			id: uuidv4(),
			userId: currentUser.id,
			name: formState.name.value,
			brand: formState.brand.value,
			model: formState.model.value,
			year: parseInt(formState.year.value),
			price: parseFloat(formState.price.value),
			description: formState.description.value,
			photos: formState.photos.value,
		};

		const existingCars = LocalStorageUtils.getItem("cars") || [];
		LocalStorageUtils.setItem("cars", [...existingCars, newCar]);

		console.log("New car added:", newCar);
		resetForm();
	};

	return (
		<MainLayout>
			<div className="flex flex-grow items-center justify-center">
				<div className="flex w-full max-w-xl flex-col items-center justify-center rounded-2xl bg-white px-6 py-16 shadow-sm">
					<form
						onSubmit={handleSellCar}
						className="flex w-full max-w-[300px] flex-col items-center justify-center space-y-10"
					>
						<div className="flex flex-col items-center justify-center space-y-1">
							<h1 className="text-[26px]">Sell your Car</h1>
							<p className="text-[13px] text-theme-light-gray">
								Please provide the details of your car.
							</p>
						</div>
						<div className="flex w-full flex-col space-y-1.5">
							<Input
								type="text"
								placeholder="Name"
								name="name"
								formState={formState}
								setFormState={setFormState}
								required
								minLength={2}
								maxLength={50}
							/>
							<Input
								type="text"
								placeholder="Model"
								name="model"
								formState={formState}
								setFormState={setFormState}
								required
								minLength={2}
								maxLength={50}
							/>
							<Input
								type="number"
								placeholder="Year"
								name="year"
								formState={formState}
								setFormState={setFormState}
								required
								min={1885}
								max={new Date().getFullYear()}
							/>
							<select
								className="w-full rounded bg-theme-input px-3 py-2 text-[13px] text-theme-text placeholder-theme-light-gray"
								value={formState.brand.value}
								onChange={(e) =>
									setFormState((prev) => ({
										...prev,
										brand: {
											value: e.target.value,
											error: "",
										},
									}))
								}
								required
							>
								<option value="" disabled>
									Select Brand
								</option>
								{CarBrands.map((brand) => (
									<option key={brand} value={brand}>
										{brand}
									</option>
								))}
							</select>
							<Input
								type="number"
								placeholder="Price"
								name="price"
								formState={formState}
								setFormState={setFormState}
								required
								min={0}
								max={1000000000}
							/>
							<TextArea
								placeholder="Description"
								name="description"
								formState={formState}
								setFormState={setFormState}
								required
								minLength={10}
								maxLength={500}
							/>
							<div className="flex flex-col space-y-2">
								<label className="text-sm text-theme-text">
									Upload Photos
								</label>
								<input
									type="file"
									accept="image/*"
									multiple
									onChange={handleImageUpload}
									className="file:bg-theme-primary hover:file:bg-theme-primary-dark w-full text-sm text-theme-text file:mr-4 file:rounded-full file:border-0 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
								/>
								{formState.photos.value.length > 0 && (
									<div className="mt-2 flex flex-wrap gap-2">
										{formState.photos.value.map(
											(photo, index) => (
												<img
													key={index}
													src={photo}
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
							Create Post
						</Button>
					</form>
				</div>
			</div>
		</MainLayout>
	);
};

export default SellCarPage;
