import { MainLayout } from "../../components/layouts";
import { Button, Input } from "../../components/ui";
import { useState } from "react";

const initialState = {
	name: {
		value: "",
		error: "",
	},
	brand: {
		value: "",
		error: "",
	},
	model: {
		value: "",
		error: "",
	},
	year: {
		value: "",
		error: "",
	},
	price: {
		value: "",
		error: "",
	},
};

const SellCarPage = () => {
	const [formState, setFormState] = useState(initialState);

	const resetForm = () => {
		setFormState(initialState);
	};

	const handleSellCar = async (e) => {
		e.preventDefault();

		console.log(formState);

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
							/>

							<Input
								type="text"
								placeholder="Brand"
								name="brand"
								formState={formState}
								setFormState={setFormState}
								required
							/>

							<Input
								type="text"
								placeholder="Model"
								name="model"
								formState={formState}
								setFormState={setFormState}
								required
							/>

							<Input
								type="text"
								placeholder="Year"
								name="year"
								formState={formState}
								setFormState={setFormState}
								required
							/>

							<Input
								type="text"
								placeholder="Price"
								name="price"
								formState={formState}
								setFormState={setFormState}
								required
							/>
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
