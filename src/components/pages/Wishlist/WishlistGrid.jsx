import { CarCard } from "../Search";
import { LocalStorageUtils } from "../../../utils";
import { useState } from "react";

export default function WishlistGrid() {
	const cars = LocalStorageUtils.getItem("cars") || [];

	const [wishlistCars, setWishlistCars] = useState(
		LocalStorageUtils.getItem("wishlist") || [],
	);

	const wishlistCarsData = cars.filter((car) =>
		wishlistCars.includes(car.id),
	);

	const removeWishlistCar = (carId) => {
		const newWishlistCars = wishlistCars.filter((id) => id !== carId);
		LocalStorageUtils.setItem("wishlist", newWishlistCars);
		setWishlistCars(newWishlistCars);
	};

	return wishlistCars.length === 0 ? (
		<div className="flex w-full items-center justify-center px-6 lg:px-14">
			<div className="flex w-full max-w-7xl flex-col items-center justify-center">
				<h2 className="text-center text-2xl font-semibold text-gray-700">
					No wishlist items found. Start adding your favorite cars!
				</h2>
			</div>
		</div>
	) : (
		<div className="flex w-full items-center justify-center px-6 lg:px-14">
			<div className="flex w-full max-w-7xl flex-col items-center justify-center">
				{/* Wishlist Car Cards Grid */}
				<div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
					{wishlistCarsData.map((car, index) => (
						<CarCard
							key={index}
							car={car}
							removeWishlistCar={removeWishlistCar}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
