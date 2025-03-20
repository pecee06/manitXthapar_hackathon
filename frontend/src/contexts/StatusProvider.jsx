import { createContext, useState } from "react";

export const StatusContext = createContext({
	severityScore: 0,
	setSeverityScore: () => {}
});

const StatusProvider = ({ children }) => {
	const [severityScore, setSeverityScore] = useState(-1);

	return (
		<StatusContext.Provider
			value={{
				severityScore,
				setSeverityScore
			}}
		>
			{children}
		</StatusContext.Provider>
	);
};

export default StatusProvider;
