import { UserContext } from "./contexts/UserProvider";
import { useContext, useEffect } from "react";
import { getCurrentUser } from "./appwrite_sdk/account";
import { Dashboard } from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Hero from "./components/Hero";

const Home = () => {
	return (
		<>
			<Heading />
			<Hero />
		</>
	);
};

const App = () => {
	const { loggedIn, login, setDets } = useContext(UserContext);
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

	return (
		<main>
			<Navbar />
			{loggedIn ? <Dashboard /> : <Home />}
			<Footer />
		</main>
	);
};

export default App;
