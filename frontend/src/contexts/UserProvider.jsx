import { createContext, useState } from "react";

export const UserContext = createContext({
	dets: {},
	setDets: () => {},
	loggedIn: false,
	login: () => {},
	logout: () => {}
});

const UserProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [dets, setDets] = useState({});

	return (
		<UserContext.Provider
			value={{
				dets,
				setDets,
				loggedIn,
				login: () => {
					setLoggedIn(true);
				},
				logout: () => {
					setLoggedIn(false);
				}
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
