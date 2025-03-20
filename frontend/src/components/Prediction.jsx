import { useContext } from "react";
import { StatusContext } from "../contexts/StatusProvider";
import { severityMap } from "../constants";

const Prediction = ({ styles }) => {
	const { severityScore } = useContext(StatusContext);

	return (
		<div
			className={`${styles}  flex flex-col justify-center items-center overflow-y-scroll p-2 font-bold text-lg`}
		>
			{severityScore >= 0 ? severityMap[severityScore] : "Prediction"}
		</div>
	);
};

export default Prediction;
