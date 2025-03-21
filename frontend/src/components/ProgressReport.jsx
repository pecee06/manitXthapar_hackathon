import Button from "./Button";
import { useState, useEffect, useContext } from "react";
import parse from "html-react-parser";
import genAiFeedback from "../api/genAiFeedback";
import { UserContext } from "../contexts/UserProvider";
import { fetchEntries } from "../appwrite_sdk/db";
import { severityMap } from "../constants";
import { Activity } from "lucide-react";

const ProgressReport = ({ styles }) => {
	const [showReport, setShowReport] = useState(false);
	const [htmlContent, setHtmlContent] = useState("");
	const { diagnosisHistory, setDiagnosisHistory, dets } =
		useContext(UserContext);

	useEffect(() => {
		fetchEntries(dets.$id)
			.then((res) => setDiagnosisHistory(res))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div
			className={`${styles} overflow-y-scroll p-4 bg-white shadow-md rounded-lg border border-gray-200`}
		>
			{!showReport ? (
				<div className="flex flex-col items-center justify-around gap-2 h-full">
					<div className="flex items-center gap-2 text-blue-700 text-xl font-bold">
						<Activity size={24} />
						<h3>Patient Progress Report</h3>
					</div>

					<div className="flex items-center text-center text-gray-600 w-[80%]">
						Instantly generate a detailed arthritis report with AI! Analyze diagnostic history, assess osteoarthritis severity, and get clinical insights in seconds. Enhance decision-making with precision-driven reports tailored to patient data. Click to create an AI-powered medical report now!
					</div>

					<Button
						text="Generate"
						styles="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
						func={() => {
							if (diagnosisHistory.length == 0) return;
							const history = diagnosisHistory.map((instance) => ({
								remark: severityMap[instance.arthritisSeverity],
								date: instance.$createdAt
							}));

							genAiFeedback(history)
								.then((res) => {
									let html = res.data;
									setHtmlContent(parse(html));
									setShowReport(true);
								})
								.catch((error) => console.error(error));
						}}
					/>
				</div>
			) : (
				<div className="p-4 text-sm overflow-x-hidden flex flex-col items-center md:mt-10 mt-5 text-gray-600">
					{htmlContent}
				</div>
			)}
		</div>
	);
};

export default ProgressReport;
