//import { Button } from "../../ui";
// import { Link, useNavigate } from "react-router-dom";

// const Header = ({ displayLoginButton = true }) => {
// 	const navigate = useNavigate();
// 	return (
// 		<header className="flex w-full items-center justify-between bg-theme-text px-8 py-3 text-white">
// 			<Link to="/">Logo</Link>

// 			{displayLoginButton && (
// 				<Button onClick={() => navigate("/login")}>Log in</Button>
// 			)}
// 		</header>
// 	);
// };

// export default Header;

import { ButtonSwitch } from "../../ui";

const SearchBar = () => {
	return (
		<div className="flex w-full items-center justify-between bg-theme-bg px-8">
			<ButtonSwitch />
			<div>search</div>
			<div>filter</div>
			<div>sort by</div>
		</div>
	);
};

export default SearchBar;
