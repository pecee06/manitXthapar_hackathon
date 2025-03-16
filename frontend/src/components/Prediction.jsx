import { useContext } from "react";
import { StatusContext } from "../contexts/StatusProvider";

const Prediction = ({ styles }) => {
	const { comment } = useContext(StatusContext);

	return (
		<div
			className={`${styles}  flex flex-col justify-center items-center overflow-y-scroll p-2 font-bold text-lg`}
		>
			{comment ? comment : "Prediction"}
		</div>
	);
};

export default Prediction;
