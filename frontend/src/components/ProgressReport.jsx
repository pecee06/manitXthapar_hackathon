import Button from "./Button";
import { useState, useEffect, useContext } from "react";
import parse from "html-react-parser";
import genAiFeedback from "../api/genAiFeedback";
import { UserContext } from "../contexts/UserProvider";
import { fetchEntries } from "../appwrite_sdk/db";
import { severityMap } from "../constants";

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
			className={`${styles} flex flex-col justify-center items-center overflow-y-scroll p-1`}
		>
			{!showReport ? (
				<Button
					text="Show Progress Report"
					styles="bg-[#f93827] text-white px-8 py-3 rounded h-fit mx-1"
					func={() => {
						if (diagnosisHistory.length == 0) return;
						const history = diagnosisHistory.map((instance) => ({
							remark: severityMap[instance.arthritisSeverity],
							date: instance.$createdAt
						}));
						// console.log(history);

						genAiFeedback(history)
							.then((res) => {
								let html = res.data;
								setHtmlContent(parse(html));
								setShowReport(true);
							})
							.catch((error) => console.error(error));
					}}
				/>
			) : (
				<div className="p-4 text-sm overflow-x-hidden">{htmlContent}</div>
			)}
		</div>
	);
};

export default ProgressReport;
