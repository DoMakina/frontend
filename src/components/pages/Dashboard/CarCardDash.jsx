import { LocalStorageUtils } from "../../../utils";
import CarExampleImage from "../../../assets/images/car-example.png";
import { MdRemoveCircleOutline } from "react-icons/md";

const CarCard = ({ car }) => {
	const removeCar = () => {
		const cars = LocalStorageUtils.getItem("cars") || [];
		const filteredCars = cars.filter((c) => c.id !== car.id);
		console.log({ cars, filteredCars, car });
		LocalStorageUtils.setItem("cars", filteredCars);
	};
	return (
		<div className="overflow-hidden rounded-xl bg-white">
			<div className="relative">
				<img
					src={car?.photos?.[0] || CarExampleImage}
					alt={car?.name}
					className="h-72 w-full object-cover"
				/>
				<button
					onClick={removeCar}
					className="absolute right-4 top-4 rounded-full bg-white p-2"
				>
					<MdRemoveCircleOutline size={30} />
				</button>
			</div>
			<div className="p-4">
				<div className="mb-2 flex items-start justify-between">
					<div>
						<h3 className="font-medium">{car?.name}</h3>
						<p className="text-sm text-gray-500">{car?.model}</p>
					</div>
					<span className="font-semibold">
						${car?.price?.toLocaleString()}
					</span>
				</div>
				<div className="flex gap-2">
					{car?.isElectric && (
						<span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
							Full Electric
						</span>
					)}
					{car?.isBestSeller && (
						<span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
							Best Seller
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default CarCard;
