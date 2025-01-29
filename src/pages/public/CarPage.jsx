import { useEffect, useState } from "react";
import LeftSideBar from "../../components/pages/CarPage/LeftSideBar";
import MainContent from "../../components/pages/CarPage/MainContent";
import RightPanel from "../../components/pages/CarPage/RightPanel";
import { MainLayout } from "../../components/layouts";
import { useParams, Link } from "react-router-dom";
import carImage from "../../assets/images/car-example.png";
import { getCar } from "../../api/public";

export default function CarPage() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const { id } = useParams();
	const [car, setCar] = useState(null);

	useEffect(() => {
		getCar(id)
			.then((response) => {
				console.log(response.data);
				setCar(response.data);
			})
			.catch(() => {
				console.log("Error fetching car");
			});
	}, [id]);

	return (
		<MainLayout>
			{car ? (
				<div className="mx-auto max-w-7xl bg-white p-4">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-12">
						<LeftSideBar
							thumbnails={car.photos}
							currentSlide={currentSlide}
							setCurrentSlide={setCurrentSlide}
						/>
						<MainContent
							name={car.name}
							thumbnail={car.photos[currentSlide]}
						/>
						<RightPanel carDetails={car} />
					</div>
				</div>
			) : (
				<div className="flex min-h-[35vh] flex-grow flex-col items-center justify-center space-y-1">
					<h1 className="text-2xl">Car Not Found</h1>
					<Link className="text-theme-blue" to="/">
						Go to Home
					</Link>
				</div>
			)}
		</MainLayout>
	);
}
