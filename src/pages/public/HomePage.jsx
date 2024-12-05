import { MainLayout } from "../../components/layouts";
import {
	FeatureSection,
	Testimonials,
	Services,
} from "../../components/pages/Home";
const HomePage = () => {
	return (
		<MainLayout>
			<div className="flex flex-grow flex-col items-center justify-center">
				<Services />
				<FeatureSection />
				<Testimonials />
			</div>
		</MainLayout>
	);
};

export default HomePage;
