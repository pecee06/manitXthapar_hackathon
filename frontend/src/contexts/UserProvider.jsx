import { createContext, useState } from "react";

export const UserContext = createContext({
	loggedIn: false,
	login: () => {},
	logout: () => {}
});

const UserProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<UserContext.Provider
			value={{
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
