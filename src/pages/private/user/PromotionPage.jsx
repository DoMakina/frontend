import { useState, useEffect } from "react";
import { Input } from "../../../components/ui";

import { useApi } from "../../../hooks";
import { createPromotion } from "../../../api/private";
import { getPromotionPrice } from "../../../api/public";
import { useNavigate, useParams } from "react-router-dom";
import { MainLayout } from "../../../components/layouts";

const initialState = {
	promotionDays: {
		value: "",
		error: "",
	},
	cardNumber: { value: "", error: "" },
	cardName: { value: "", error: "" },
	expiryDate: { value: "", error: "" },
	cvv: { value: "", error: "" },
};

const PromotionPage = () => {
	const { handleApiCall, loading } = useApi(createPromotion, {
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

	const { handleApiCall: getPromotionPriceApiCall } =
		useApi(getPromotionPrice);

	const { id } = useParams();

	const [formState, setFormState] = useState(initialState);
	const [promotionPrice, setPromotionPrice] = useState();

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (loading) return;
		clearErrors();
		const newPromotion = {
			promotionDays: parseInt(formState.promotionDays.value),
			cardNumber: formState.cardNumber.value,
			cardName: formState.cardName.value,
			expiryDate: formState.expiryDate.value,
			cvv: formState.cvv.value,
			carId: id,
		};
		const data = await handleApiCall(newPromotion);
		if (data) {
			resetForm();
			navigate("/dashboard");
		}
	};

	useEffect(() => {
		const fetchPromotionPrice = async () => {
			const data = await getPromotionPriceApiCall();
			if (!data) return navigate("/dashboard");

			setPromotionPrice(data);
		};

		fetchPromotionPrice();
	}, []);

	const totalPromotionPrice = promotionPrice * formState.promotionDays.value;

	return (
		<MainLayout
			mainOptions={{
				paddingVertical: true,
			}}
		>
			<div className="flex w-full items-center justify-center">
				<div className="w-full max-w-lg space-y-8 rounded-xl bg-white p-12 shadow-md">
					<div>
						<h2 className="mt-6 text-center text-3xl font-extrabold text-blue-500">
							Promotion Payment
						</h2>
						<p className="mt-2 text-center text-sm text-gray-600">
							Complete your payment to activate the promotion
						</p>
					</div>
					<form className="mt-12 space-y-6" onSubmit={handleSubmit}>
						<div className="space-y-6 rounded-md">
							<div>
								<label
									htmlFor="promotionWeeks"
									className="block text-sm font-medium text-gray-700"
								>
									Promotion Duration (days)
								</label>
								<Input
									type="number"
									min="1"
									required
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
									placeholder="Enter number of weeks"
									formState={formState}
									setFormState={setFormState}
									name="promotionDays"
								/>
							</div>
							<div>
								<label
									htmlFor="cardNumber"
									className="block text-sm font-medium text-gray-700"
								>
									Card number
								</label>
								<Input
									type="text"
									required
									maxLength="16"
									formState={formState}
									setFormState={setFormState}
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
									placeholder="Card number"
									name="cardNumber"
								/>
							</div>
							<div>
								<label
									htmlFor="cardName"
									className="block text-sm font-medium text-gray-700"
								>
									Name on card
								</label>
								<Input
									type="text"
									formState={formState}
									setFormState={setFormState}
									required
									className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
									placeholder="Name on card"
									name="cardName"
								/>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label
										htmlFor="expiryDate"
										className="block text-sm font-medium text-gray-700"
									>
										Expiry date
									</label>
									<Input
										type="text"
										required
										formState={formState}
										setFormState={setFormState}
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
										placeholder="MM/YY"
										name="expiryDate"
									/>
								</div>
								<div>
									<label
										htmlFor="cvv"
										className="block text-sm font-medium text-gray-700"
									>
										CVV
									</label>
									<Input
										type="text"
										required
										formState={formState}
										setFormState={setFormState}
										className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
										placeholder="CVV"
										name="cvv"
									/>
								</div>
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<span className="text-sm font-medium text-gray-900">
									Promotion Price:
								</span>
								<span className="ml-2 text-lg font-bold text-blue-500">
									{totalPromotionPrice} $
								</span>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 px-4 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							>
								Pay Now
							</button>
						</div>
					</form>
				</div>
			</div>
		</MainLayout>
	);
};

export default PromotionPage;
