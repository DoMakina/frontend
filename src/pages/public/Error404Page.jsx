import { Link } from "react-router-dom";
import { MainLayout } from "../../components/layouts";

const Error404Page = () => {
	return (
		<MainLayout>
			<div className="flex flex-grow flex-col items-center justify-center space-y-1 min-h-[35vh]">
				<h1 className="text-2xl">404 Page Not Found</h1>
				<Link className="text-theme-blue" to="/">
					Go to Home
				</Link>
			</div>
		</MainLayout>
	);
};

export default Error404Page;
