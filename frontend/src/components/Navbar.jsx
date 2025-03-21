import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../contexts/UserProvider";
import Background from "./Background";
import Logo from "./Logo";
import Button from "../components/Button";
import { sdk_logout } from "../appwrite_sdk/account";
import { Menu, X } from "lucide-react";

function Navbar() {
	const { loggedIn, logout } = useContext(UserContext);
	const [menuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<div>
			<header className="flex justify-between items-center sm:px-5 p-4 border-b bg-opacity-20 bg-white">
				{!loggedIn && <Background />}

				<div className="flex items-center">
					<Logo />
				</div>

				<nav className="hidden md:flex gap-6">
					<Link
						className="font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
						to="/"
					>
						Home
					</Link>
					<Link
						className="font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
						to="/about"
					>
						About Us
					</Link>
					{loggedIn && (
						<>
							<Link
								className="font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
								to="/repository"
							>
								My X-Rays
							</Link>

							<Link
								className="font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
								to="/profile"
							>
								My profile
							</Link>
						</>
					)}
				</nav>

				{/* Mobile Menu Button */}
				<div className="md:hidden">
					<button onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>

				{/* Mobile Dropdown */}
				{menuOpen && (
					<div className="absolute top-16 right-5 bg-white shadow-lg rounded-lg w-48 p-4 flex flex-col items-center gap-4 md:hidden">
						<p
							className="font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
							onClick={() => {
								setMenuOpen(false);
								navigate("/");
							}}
						>
							Home
						</p>
						<>
							<p
								className="font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
								onClick={() => {
									setMenuOpen(false);
									navigate("/about");
								}}
							>
								About Us
							</p>

							{loggedIn && (
								<p
									className="font-medium text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
									onClick={() => {
										setMenuOpen(false);
										navigate("/repository");
									}}
								>
									My X-Rays
								</p>
							)}
						</>

						{loggedIn ? (
							<Button
								text="Logout"
								styles="bg-blue-700 hover:scale-105 transition-all duration-300 text-white rounded-lg px-4 md:px-8 py-2 h-fit"
								func={() => {
									sdk_logout()
										.then(() => logout())
										.catch((error) => console.error(error));
								}}
							/>
						) : (
							<Button
								text="Login"
								styles="bg-blue-700 border border-white hover:scale-105 text-md text-white px-8 py-2 rounded-lg h-fit"
								func={() => navigate("/login")}
							/>
						)}
					</div>
				)}

				{/* Login/Logout Button */}
				<div className="hidden md:block">
					{loggedIn ? (
						<Button
							text="Logout"
							styles="bg-blue-700 hover:scale-105 transition-all duration-300 text-white rounded-lg px-4 md:px-8 py-2 h-fit"
							func={() => {
								sdk_logout()
									.then(() => logout())
									.catch((error) => console.error(error));
							}}
						/>
					) : (
						<Button
							text="Login"
							styles="bg-blue-700 border border-white hover:scale-105 text-md text-white px-8 py-2 rounded-lg h-fit"
							func={() => navigate("/login")}
						/>
					)}
				</div>
			</header>
		</div>
	);
}

export default Navbar;
