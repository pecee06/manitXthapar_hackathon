import { createContext, useState } from "react";

export const UserContext = createContext({
	dets: {},
	setDets: () => {},
	loggedIn: false,
	login: () => {},
	logout: () => {},
	diagnosisHistory: [
		// {remark, date}
	],
	setDiagnosisHistory: () => {}
});

const UserProvider = ({ children }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [dets, setDets] = useState({});
	const [diagnosisHistory, setDiagnosisHistory] = useState([]);

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
				},
				diagnosisHistory,
				setDiagnosisHistory
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
