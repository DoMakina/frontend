import { MdMoreVert, MdEdit, MdDelete, MdStar } from "react-icons/md";
import CarExampleImage from "../../../assets/images/car-example.png";

const CarCard = ({ car, onEdit, onDelete, onPromote }) => {
	return (
		<div className="overflow-hidden rounded-xl bg-white shadow-md">
			<div className="relative">
				<img
					src={car?.images?.[0] || CarExampleImage}
					alt={`${car?.brand} ${car?.model}`}
					width={400}
					height={300}
					className="h-72 w-full object-cover"
				/>
				<div className="group absolute right-4 top-4">
					<div className="rounded-full bg-white p-2 text-gray-600 hover:bg-gray-100 focus:outline-none">
						<MdMoreVert size={24} />
					</div>
					<div className="absolute right-0 w-48 scale-0 transition-all duration-200 group-hover:scale-100">
						<div className="mt-2 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
							{/* <button
								onClick={() => {
									onEdit();
								}}
								className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							>
								<MdEdit className="mr-3 h-5 w-5" />
								Edit
							</button> */}
							<button
								onClick={() => {
									onDelete();
								}}
								className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							>
								<MdDelete className="mr-3 h-5 w-5" />
								Delete
							</button>
							<button
								onClick={() => {
									onPromote();
								}}
								className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							>
								<MdStar className="mr-3 h-5 w-5" />
								{car.promoted
									? "Remove Promotion"
									: "Add Promotion"}
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="p-4">
				<div className="mb-2 flex items-start justify-between">
					<h3 className="font-medium">{`${car?.brand} ${car?.model}`}</h3>
					<span className="font-semibold">
						{car?.price?.toLocaleString()}$
					</span>
				</div>
				<div className="flex gap-2">
					{car?.promoted && (
						<span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">
							Promoted
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default CarCard;
