import { ClipLoader } from "react-spinners";

const LoadingIndicator = ({ size = 60, color = "#D9251D" }) => {
	return <ClipLoader color={color} size={size} />;
};

export default LoadingIndicator;
