import { UserContext } from "./contexts/UserProvider";
import { useContext, useEffect } from "react";
import About from "./components/About";
import { getCurrentUser } from "./appwrite_sdk/account";
import { Dashboard } from "./pages";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
	const { loggedIn, login, setDets, dets } = useContext(UserContext);
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
			<Navbar />
			{loggedIn ? <Dashboard /> : <About />}
			<Footer />
		</main>
	);
};

export default App;
