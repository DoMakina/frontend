import { useApi } from "../../../hooks";
import { CarCardDash } from "../Dashboard";
import { useState, useEffect } from "react";
import { getCars, deleteCar } from "../../../api/private";
import { useNavigate } from "react-router-dom";
export default function GridDashboardCar() {
	const navigate = useNavigate();
	const [cars, setCars] = useState([]);
	const { handleApiCall: getCarsApiCalls } = useApi(getCars);
	const { handleApiCall: deleteCarApiCall } = useApi(deleteCar, {
		disableSuccessToast: false,
	});

	const handleDeleteCar = (id) => {
		deleteCarApiCall({ id }).then(() => {
			setCars((prev) => prev.filter((car) => car.id !== id));
		});
	};

	useEffect(() => {
		getCarsApiCalls().then((data) => setCars(data));
	}, []);

	return cars.length === 0 ? (
		<div className="flex min-h-44 w-full items-center justify-center px-6 lg:px-14">
			<div className="flex w-full max-w-7xl flex-col items-center justify-center space-y-6">
				<h2 className="text-center text-2xl font-semibold text-gray-700">
					No cars yet. Start selling now!
				</h2>
				<button
					onClick={() => {
						navigate("/sell-car");
					}}
					className="flex items-center gap-2 rounded bg-blue-100 px-4 py-2 font-semibold text-blue-700 duration-150 hover:bg-blue-500 hover:text-white"
				>
					Sell a Car
				</button>
			</div>
		</div>
	) : (
		<div className="flex w-full items-center justify-center px-6 lg:px-14">
			<div className="flex w-full max-w-7xl flex-col items-center justify-center">
				{/* Car Cards Grid */}
				<div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
					{cars.map((car, index) => (
						<CarCardDash
							key={index}
							car={car}
							onDelete={() => handleDeleteCar(car.id)}
							onEdit={() => navigate(`/edit-car/${car.id}`)}
							onPromote={() => {
								navigate(`/promote-car/${car.id}`);
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
