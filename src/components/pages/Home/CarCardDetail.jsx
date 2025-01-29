import { GiSteeringWheel } from "react-icons/gi";
import BMW from "../../../assets/images/BMW.jpeg";

export default function CarDetailsCard({ data }) {
	return (
		<div className="max-w-xs rounded-lg bg-gray-800 p-4 transition-all duration-150 hover:scale-[1.02]">
			<div className="mb-4 flex items-start justify-between">
				<div>
					<h3 className="text-xl font-bold text-white">
						{data?.brand} {data?.model}
					</h3>
					
				</div>
				<span className="rounded bg-white px-2 py-1 text-xs font-bold text-green-700">
					Promoted
				</span>
			</div>

			<div className="mb-4">
				<img
					src={BMW}
					alt="BMW i4 M Sport"
					className="w-full rounded-lg"
				/>
			</div>

			<div className="mb-4 flex items-center justify-between">
				<button className="flex items-center gap-2 text-white">
					<GiSteeringWheel className="h-5 w-5" />
					<span>Free Test Drive</span>
				</button>
				<span className="text-xl font-bold text-white">$266,500</span>
			</div>

			<button className="w-full rounded-lg bg-theme-blue py-3 font-semibold text-white">
				MAKE AN OFFER
			</button>
		</div>
	);
}
