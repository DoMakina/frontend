import { LocalStorageUtils } from "../../../utils";
import { useAuth } from "../../../hooks";
import { CarCardDash } from "../Dashboard";

export default function GridDashboardCar() {
	const { currentUser } = useAuth();
	const cars = LocalStorageUtils.getItem("cars") || [];
	const filteredCars = cars.filter((car) => car.userId === currentUser.id);
	console.log({ cars, filteredCars, currentUser });

	return cars.length === 0 ? (
		<div className="flex w-full items-center justify-center px-6 lg:px-14">
			<div className="flex w-full max-w-7xl flex-col items-center justify-center">
				<h2 className="text-center text-2xl font-semibold text-gray-700">
					No cars found. Please try again later.
				</h2>
			</div>
		</div>
	) : (
		<div className="flex w-full items-center justify-center px-6 lg:px-14">
			<div className="flex w-full max-w-7xl flex-col items-center justify-center">
				{/* Car Cards Grid */}
				<div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
					{filteredCars.map((car, index) => (
						<CarCardDash key={index} car={car} />
					))}
				</div>
			</div>
		</div>
	);
}
