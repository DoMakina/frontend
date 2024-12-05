import { Button } from "../../ui";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { Logo } from "../../common";

const Header = ({ displayLoginButton = true }) => {
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();
	return (
		<header className="flex w-full items-center justify-between bg-theme-text px-8 py-3 text-white">
			<Link to="/">
				<Logo />
			</Link>

			<div className="flex flex-row space-x-4">
				{displayLoginButton && currentUser ? (
					<div className="flex">
						<Link to="/sell-car">
							<Button>Sell Car</Button>
						</Link>
						<Button onClick={logout}>Log out</Button>
					</div>
				) : (
					<Button onClick={() => navigate("/login")}>Log in</Button>
				)}
			</div>
		</header>
	);
};

export default Header;
