import { UserContext } from "./contexts/UserProvider";
import { useContext, useEffect } from "react";
import Button from "./components/Button";
import Logo from "./components/Logo";
import Background from "./components/Background";
import About from "./components/About";
import { sdk_logout, getCurrentUser } from "./appwrite_sdk/account";
import { useNavigate } from "react-router";
import { Dashboard } from "./pages";

const App = () => {
	const navigate = useNavigate();
	const { loggedIn, login, logout, setDets, dets } = useContext(UserContext);
	useEffect(() => {
		getCurrentUser()
			.then((res) => {
				if (res) {
					setDets(res);
					login();
				}
			})
			.catch((error) => console.error(error));
	}, []);
	// console.log(dets);

	return (
		<main>
			<header
				className="flex justify-around p-2 border-b items-center"
				style={{
					backgroundColor: "rgba(255,255,255,0.2)"
				}}
			>
				{!loggedIn && <Background />}
				<Logo />
				{loggedIn ? (
					<div>
						<Button
							text="My X-Rays"
							styles="bg-[#f93827] text-white px-8 py-3 rounded h-fit mx-1"
							func={() => navigate("/repository")}
						/>
						<Button
							text="Logout"
							styles="bg-[#f93827] text-white px-8 py-3 rounded h-fit mx-1"
							func={() => {
								sdk_logout()
									.then(() => logout())
									.catch((error) => console.error(error));
							}}
						/>
					</div>
				) : (
					<Button
						text="Login"
						styles="bg-[#f93827] text-white px-8 py-3 rounded h-fit"
						func={() => navigate("/login")}
					/>
				)}
			</header>
			{loggedIn ? <Dashboard /> : <About />}
		</main>
	);
};

export default App;
