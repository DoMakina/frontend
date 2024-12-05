import { FaChevronRight } from "react-icons/fa";
import { CarCard } from "../Search";

export default function CarGrid() {
	return (
		<div className="w-full p-6">
			{/* Advanced Search Button */}
			<div className="mb-6 flex justify-end">
				<button className="flex items-center gap-2 rounded bg-blue-100 px-4 py-2 font-semibold text-blue-700 hover:bg-blue-500 hover:text-white">
					Advanced Search <FaChevronRight />
				</button>
			</div>

			{/* Car Cards Grid */}
			<div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
				<CarCard />
			</div>
		</div>
	);
}
