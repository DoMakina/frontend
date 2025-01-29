import { useState, useEffect } from "react";
import { MainLayout } from "../../components/layouts";
import { CarCard } from "../../components/pages/Search";
import { FiSearch, FiFilter } from "react-icons/fi";
import { useApi } from "../../hooks";
import { searchCars } from "../../api/public";

const SearchPage = () => {
	const [cars, setCars] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [brands, setBrands] = useState([]);
	const [selectedBrandIds, setSelectedBrandIds] = useState([]);

	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const { handleApiCall: getBrandsApiCall, loading: loadingBrands } =
		useApi(searchCars);

	const { handleApiCall: searchCarsApiCall, loading: loadingCars } =
		useApi(searchCars);

	useEffect(() => {
		searchCarsApiCall({
			page: 1,
			minPrice: 0,
			maxPrice: 1000000,
			brandIds: selectedBrandIds,
		}).then((res) => {
			setCars(res.data);
		});
	}, [selectedBrandIds]);

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const resetFilters = () => {
		setSearchTerm("");
		setSelectedBrandIds([]);
	};

	const availableBrands = [...new Set(cars.map((car) => car.brand))];

	return (
		<MainLayout
			mainOptions={{
				paddingVertical: false,
			}}
		>
			<div className="w-full space-y-4 px-4 py-6 md:space-y-8">
				{/* Header */}
				<div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
					<div className="relative w-full max-w-2xl">
						<FiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
						<input
							type="text"
							placeholder="Find car here..."
							className="w-full rounded-full border border-gray-200 py-2 pl-10 pr-4"
							value={searchTerm}
							onChange={handleSearchChange}
						/>
					</div>

					<div className="flex w-full items-center justify-between gap-4 md:w-auto">
						<button
							className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-2 text-sm md:hidden"
							onClick={() => setIsFilterOpen(!isFilterOpen)}
						>
							<FiFilter />
							Filter
						</button>
					</div>
				</div>

				{/* Main Content */}
				<div className="flex flex-col gap-8 md:flex-row">
					{/* Sidebar */}
					<div
						className={`w-full md:w-64 md:flex-shrink-0 ${
							isFilterOpen ? "block" : "hidden md:block"
						}`}
					>
						<div className="rounded-xl bg-white p-4 shadow-md">
							<div className="mb-4 flex items-center justify-between">
								<h3 className="font-medium">Filter</h3>
								<button
									className="text-sm text-blue-600"
									onClick={resetFilters}
								>
									Reset
								</button>
							</div>

							<div className="space-y-4">
								<div>
									<h4 className="mb-2 text-sm font-medium">
										Brand
									</h4>
									<div className="space-y-2">
										{availableBrands.map((brand) => (
											<label
												key={brand}
												className="flex items-center gap-2"
											>
												{/* <input
													type="checkbox"
													className="rounded"
													checked={selectedBrands.includes(
														brand,
													)}
													onChange={() =>
														setBrandIds((prev) => {
															if (
																prev.includes(
																	brand,
																)
															) {
																return prev.filter(
																	(b) =>
																		b !==
																		brand,
																);
															}
															return [
																...prev,
																brand,
															];
														})
													}
												/> */}
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
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
