import { useContext } from "react";
import { StatusContext } from "../contexts/StatusProvider";
import { severityMap } from "../constants";
import { BrainCircuit, UploadCloud } from "lucide-react";

const Prediction = ({ styles }) => {
	const { severityScore } = useContext(StatusContext);

	if (severityScore < 0)
		return (
			<div
				className={`${styles} flex flex-col items-center overflow-y-auto p-4 bg-white shadow-md rounded-lg border border-gray-200`}
			>
				<div className="flex items-center gap-2 text-blue-700 text-xl font-bold">
					<BrainCircuit size={24} />
					<h3>AI Diagnosis</h3>
				</div>

				<p className="text-gray-600 text-sm text-center mt-5 md:mt-10">
					AI-powered analysis of knee X-rays for osteoarthritis severity
					detection.
				</p>

				<div className="flex flex-col items-center md:mt-10 mt-5 text-gray-600 text-center">
					<UploadCloud
						size={64}
						className="text-blue-500 mt-5"
					/>
					No file uploaded
					<br />
					Upload an X-ray to begin
				</div>
			</div>
		);
	return (
		<div
			className={`${styles} flex flex-col justify-center items-center overflow-y-scroll p-2 font-bold text-lg`}
		>
			{severityMap[severityScore]}
		</div>
	);
};

export default Prediction;
