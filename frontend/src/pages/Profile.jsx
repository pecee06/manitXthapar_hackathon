import { useMemo, useEffect, useContext } from "react";
import { User, Calendar, ChartLine } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	Title,
	Tooltip,
	Legend,
	CategoryScale
} from "chart.js";
import { UserContext } from "../contexts/UserProvider";

const Profile = () => {
	const { diagnosisHistory, dets } = useContext(UserContext);
	const diagnosisScores = useMemo(() =>
		diagnosisHistory.map((record) => record.arthritisSeverity)
	);

	ChartJS.register(
		LineElement,
		PointElement,
		LinearScale,
		CategoryScale,
		Title,
		Tooltip,
		Legend
	);

	useEffect(() => {}, []);

	const progressData = {
		labels: diagnosisScores.map((_, idx) => `Diagnosis ${idx + 1}`),
		datasets: [
			{
				label: "Arthritis Severity Over Time",
				data: diagnosisScores, // Example severity data points (replace with real data)
				borderColor: "rgb(75, 192, 192)",
				backgroundColor: "rgba(75, 192, 192, 0.2)", // Optional for fill effect
				borderWidth: 2,
				tension: 0.3, // Smoother curve
				fill: false,
				pointRadius: 4 // Visible data points
			}
		]
	};

	return (
		<div className="min-h-screen bg-gray-100">
			<Navbar />
			<main className="max-w-4xl mx-auto py-12 px-4 space-y-6">
				{/* User Info Section */}
				<section className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
					<div className="flex items-center justify-between mb-6">
						<div className="flex items-center">
							<User className="h-12 w-12 text-blue-600 mr-4" />
							<div>
								<h2 className="text-2xl font-semibold text-gray-800">
									{dets.name}
								</h2>
								<p className="text-sm text-gray-500">{dets.email}</p>
							</div>
						</div>
					</div>
				</section>

				{/* Diagnosis and Progress Tracking Section */}
				<section className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
					<h3 className="text-2xl font-semibold text-gray-800 mb-4">
						Diagnosis Results
					</h3>

					{/* Progress Chart */}
					<div className="mt-6">
						<div className="flex items-center mb-4">
							<ChartLine className="h-6 w-6 text-blue-600 mr-2" />
							<h4 className="text-lg font-semibold text-gray-800">
								Progress Over Time
							</h4>
						</div>
						<div className="mt-4">
							<Line data={progressData} />
						</div>
					</div>
				</section>

				{/* Additional Section: Next Steps */}
				<section className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
					<div className="flex items-center mb-4">
						<Calendar className="h-10 w-10 text-blue-600 mr-4" />
						<h3 className="text-xl font-semibold text-gray-800">Next Steps</h3>
					</div>
					<div>
						<p className="text-gray-700 mb-4">
							Based on your results, here are the next steps:
						</p>
						<ul className="list-disc pl-5 text-gray-700 space-y-2">
							<li>Consult with your physician for a detailed evaluation.</li>
							<li>Consider physical therapy to reduce symptoms.</li>
							<li>
								Schedule a follow-up X-ray in 3 months to monitor progress.
							</li>
						</ul>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default Profile;
