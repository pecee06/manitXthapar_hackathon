import { UserContext } from "./contexts/UserProvider";
import { useContext, useEffect } from "react";
import Button from "./components/Button";
import { sdk_logout, getCurrentUser } from "./appwrite_sdk/account";

const App = () => {
	const { loggedIn, login, logout } = useContext(UserContext);
	useEffect(() => {
		getCurrentUser()
			.then((res) => (res ? login() : null))
			.catch((error) => console.error(error));
	}, []);

	if (loggedIn)
		return (
			<Button
				text="Logout"
				func={() => {
					sdk_logout()
						.then(() => logout())
						.catch((error) => console.error(error));
				}}
			/>
		);
	return <p>App</p>;
};

export default App;
