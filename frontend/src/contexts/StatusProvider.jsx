import { createContext, useState } from "react";

export const StatusContext = createContext({
	severityScore: 0,
	setSeverityScore: () => {},
	comment: "",
	setComment: () => {}
});

const StatusProvider = ({ children }) => {
	const [severityScore, setSeverityScore] = useState(0);
	const [comment, setComment] = useState("");

	return (
		<StatusContext.Provider
			value={{
				severityScore,
				setSeverityScore,
				comment,
				setComment
			}}
		>
			{children}
		</StatusContext.Provider>
	);
};

export default StatusProvider;
