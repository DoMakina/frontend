import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useState } from "react";

const CarCard = ({ car }) => {
	const [isLiked, setIsLiked] = useState(false);

	const toggleLike = () => {
		console.log("Heart clicked");
		setIsLiked((prev) => !prev);
		// or setIsLiked(!isLiked);
	};

	return (
		<div className="relative">
			<div className="flex w-80 flex-col space-y-3 rounded-lg bg-white p-4 shadow-md">
				<div className="flex flex-col space-y-1">
					<h3 className="text-md font-semibold">{car?.name}</h3>
					<p className="text-sm text-stone-400">{car?.type}</p>
				</div>
				<img
					src={car?.photos?.[0]}
					alt="car"
					className="h-48 w-full rounded-lg object-cover"
				/>
				<button className="flex self-end text-lg font-semibold">
					{car?.price}
				</button>
			</div>
			<button
				onClick={toggleLike}
				className="absolute right-4 top-4 rounded-lg bg-stone-300 p-1.5"
			>
				{isLiked ? (
					<IoHeartSharp size={20} />
				) : (
					<IoHeartOutline size={20} />
				)}
			</button>
		</div>
	);
};

export default CarCard;
