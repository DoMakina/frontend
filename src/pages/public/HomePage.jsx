import { MainLayout } from "../../components/layouts";
import { FeatureSection, Testimonials } from "../../components/pages/Home";
const HomePage = () => {
	return (
		<MainLayout>
			<div className="flex flex-grow flex-col items-center justify-center">
				<FeatureSection />
				<Testimonials />
			</div>
		</MainLayout>
	);
};

export default HomePage;
