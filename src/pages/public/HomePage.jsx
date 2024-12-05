import { MainLayout } from "../../components/layouts";
import { FeatureSection, Hero, CarGrid } from "../../components/pages/Home";
const HomePage = () => {
	return (
		<MainLayout
			mainOptions={{
				paddingVertical: false,
			}}
		>
			<div className="flex flex-grow flex-col items-center justify-center">
				<Hero />
				<FeatureSection />
				<CarGrid />
			</div>
		</MainLayout>
	);
};

export default HomePage;
