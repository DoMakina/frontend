import { GiSteeringWheel } from "react-icons/gi";

export default function CarDetailsCard() {
	return (
		<div className="max-w-xs rounded-lg bg-gray-800 p-4 transition-all duration-150 hover:scale-[1.02]">
			<div className="mb-4 flex items-start justify-between">
				<div>
					<h3 className="text-xl font-bold text-white">
						BMW M4cs : M Sport
					</h3>
					<p className="text-gray-400">Full - Sport Car</p>
				</div>
				<span className="rounded bg-white px-2 py-1 text-xs font-bold text-black">
					NEW
				</span>
			</div>

			<div className="mb-4">
				<img
					src="https://th.bing.com/th/id/OIP.xt17fGATSm__JgpYfH-7AwHaEK?w=291&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7   height=150&width=250"
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
