import { MainLayout } from "../../components/layouts";
import { CarCard } from "../../components/pages/Search";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks";
import { fetchCars } from "../../api/public";

const SearchPage = () => {
	// const { handleApiCall, loading } = useApi(fetchCars);
	const [cars, setCars] = useState([
		{
			name: "1999 Toyota Corolla",
			type: "Sedan",
			photos: [
				"https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg",
			],
			price: "$20,000",
		},
		{
			name: "Toyota Corolla",
			type: "Sedan",
			photos: [
				"https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg",
			],
			price: "$20,000",
		},
		{
			name: "BMW 3 Series",
			type: "Sedan",
			photos: [
				"https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg",
			],
			price: "$20,000",
		},
		{
			name: "Mercedes Benz C-Class",
			type: "Sedan",
			photos: [
				"https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg",
			],
			price: "$10,000",
		},
	]);

	// this will fetch the cars from the API when the component mounts
	// useEffect(() => {
	// 	handleApiCall().then((data) => {
	// 		if (data) setCars(data);
	// 	});
	// }, []);

	return (
		<MainLayout>
			<div className="flex flex-grow flex-row items-center justify-center gap-8">
				{cars.map((car, index) => (
					<CarCard key={index} car={car} />
				))}
			</div>
		</MainLayout>
	);
};

export default SearchPage;
