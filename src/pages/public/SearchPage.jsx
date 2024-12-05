import { MainLayout } from "../../components/layouts";
import { CarCard } from "../../components/pages/Search";
import { FiSearch } from "react-icons/fi";
import { PiFadersHorizontalBold } from "react-icons/pi";

const SearchPage = () => {
	const cars = [
		{
			id: 1,
			name: "BMW M4 Coupe",
			category: "Sedan",
			price: 266500,
			image: "/placeholder.svg?height=200&width=300",
			hasTestDrive: true,
		},
		{
			id: 2,
			name: "BMW i4 - M Sport",
			category: "Sedan",
			price: 252720,
			image: "/placeholder.svg?height=200&width=300",
			isElectric: true,
		},
		{
			id: 3,
			name: "Toyota GR Supra",
			category: "Sport Car",
			price: 185450,
			image: "/placeholder.svg?height=200&width=300",
			isBestSeller: true,
		},
	];

	return (
		<MainLayout
			mainOptions={{
				paddingVertical: false,
			}}
		>
			<div className="w-full space-y-8 px-4 py-6">
				{/* Header */}
				<div className="flex items-center justify-end gap-4">
					<div className="flex flex-1 items-center justify-center">
						<div className="relative max-w-2xl flex-1">
							<FiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
							<input
								type="text"
								placeholder="Find car here..."
								className="w-full rounded-full border border-gray-200 py-2 pl-10 pr-4"
							/>
						</div>
					</div>
					<button className="rounded-full border border-gray-200 bg-white p-2">
						<PiFadersHorizontalBold className="h-5 w-5 text-gray-600" />
					</button>
					<select className="rounded-full border border-gray-200 bg-white p-2 text-sm">
						<option>Sort by: Recommended</option>
						<option>Price: Low to High</option>
						<option>Price: High to Low</option>
					</select>
				</div>

				{/* Main Content */}
				<div className="flex gap-8">
					{/* Sidebar */}
					<div className="w-64 flex-shrink-0">
						<div className="rounded-xl bg-white p-4">
							<div className="mb-4 flex items-center justify-between">
								<h3 className="font-medium">Filter</h3>
								<button className="text-sm text-blue-600">
									Reset
								</button>
							</div>

							<div className="space-y-4">
								<div>
									<h4 className="mb-2 text-sm font-medium">
										Brand
									</h4>
									<div className="space-y-2">
										{[
											"All Brand",
											"BMW",
											"Mercedes Benz",
											"Tesla",
										].map((brand) => (
											<label
												key={brand}
												className="flex items-center gap-2"
											>
												<input
													type="checkbox"
													className="rounded"
												/>
												<span className="text-sm">
													{brand}
												</span>
											</label>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Car Grid */}
					<div className="flex-1">
						<div className="mb-4 flex items-center gap-2">
							<div className="flex items-center gap-1 rounded-full bg-blue-100 px-4 py-1 text-sm text-blue-600">
								Free Test Drive
								<button className="ml-1">&times;</button>
							</div>
							<div className="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-600">
								$200,000 - $300,000
								<button className="ml-1">&times;</button>
							</div>
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{cars.map((car) => (
								<CarCard key={car.id} car={car} />
							))}
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default SearchPage;
