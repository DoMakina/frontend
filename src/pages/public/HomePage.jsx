import { MainLayout } from "../../components/layouts";
import { FeatureSection } from "../../components/pages/Home";
const HomePage = () => {
	return (
		<MainLayout>
			<div className="flex flex-grow items-center justify-center">
				<FeatureSection/>
			</div>
		</MainLayout>
	);
};

export default HomePage;
