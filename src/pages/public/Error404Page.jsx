import { Link } from "react-router-dom";

const Error404Page = () => {
	return (
		<div className="">
			<h1>
				Page not found. Go back to <Link to="/">Home</Link>
			</h1>
		</div>
	);
};

export default Error404Page;
