import { severityMap } from "../constants";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const SeverityDisplay = ({ score }) => {
	const severity = severityMap[score];
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

	if (loading) return <Loader text="Diagnosing" />;
	return (
		<div
			className={`flex flex-col items-center justify-center p-4 rounded-2xl border shadow-lg ${severity.bg} w-full max-w-lg`}
		>
			<severity.Icon className="w-8 h-8" />
			<p className="mt-2 text-lg font-semibold text-center">{severity.text}</p>
		</div>
	);
};

export default SeverityDisplay;
