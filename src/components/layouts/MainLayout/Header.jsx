import { Button } from "../../ui";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks";
import { Logo } from "../../common";
import { BsBookmarkDashFill } from "react-icons/bs";
import { useState } from "react";
import { CiUser } from "react-icons/ci";

const Header = () => {
	const { currentUser, logout } = useAuth();
	const navigate = useNavigate();
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const userRoles = currentUser?.roles || [];

	const menu = [
		{
			title: "Dashboard",
			link: "/dashboard",
			roles: ["user"],
		},
		{
			title: "Sell Car",
			link: "/sell-car",
			roles: ["user"],
		},
		{
			title: "Admin Dashboard",
			link: "/admin",
			roles: ["admin", "superadmin"],
		},
		{
			title: "Brands",
			link: "/admin/brands",
			roles: ["admin", "superadmin"],
		},
		{
			title: "Log out",
			onClick: () => {
				logout();
			},
			roles: ["user", "admin", "superadmin"],
		},
	];

	return (
		<header className="flex w-full items-center justify-between bg-theme-text px-8 py-3 text-white">
			{/* Logo */}
			<Link
				className="flex flex-row items-center justify-center space-x-3"
				to="/"
			>
				<Logo />
				<h1 className="text-xl font-bold">DoMakina</h1>
			</Link>

			{/* Right Side */}
			<div className="flex flex-row items-center space-x-4">
				{/* Wishlist Button */}
				<div
					className="cursor-pointer rounded-full p-2 shadow-md transition-transform hover:scale-105 hover:shadow-lg"
					onClick={() => navigate("/wishlist")}
				>
					<BsBookmarkDashFill size={22} />
				</div>

				{/* User Section */}
				{currentUser ? (
					<div className="relative">
						{/* User Icon */}
						<button
							onClick={() => setIsDropdownOpen(!isDropdownOpen)}
							className="flex items-center space-x-2"
						>
							<CiUser size={22} />
							<p>{currentUser.displayName}</p>
						</button>

						{/* Dropdown Menu */}
						{isDropdownOpen && (
							<div className="absolute right-0 z-40 mt-2 w-40 overflow-hidden rounded-md bg-white text-theme-text shadow-md">
								{menu.map((item, index) => {
									if (
										item.roles.some((role) =>
											userRoles.includes(role),
										)
									) {
										if (item.link) {
											return (
												<Link
													key={index}
													to={item.link}
													className="block px-4 py-2 hover:bg-gray-100"
													onClick={() =>
														setIsDropdownOpen(false)
													}
												>
													{item.title}
												</Link>
											);
										} else {
											return (
												<button
													key={index}
													className="block w-full px-4 py-2 text-left hover:bg-gray-100"
													onClick={() => {
														item.onClick();
														setIsDropdownOpen(
															false,
														);
													}}
												>
													{item.title}
												</button>
											);
										}
									}
								})}
							</div>
						)}
					</div>
				) : (
					/* Log In Button */
					<Button onClick={() => navigate("/login")}>Log in</Button>
				)}
			</div>
		</header>
	);
};

export default Header;
