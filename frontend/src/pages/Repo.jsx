import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserProvider";
import { FileImage } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { getFile } from "../appwrite_sdk/storage";

const Repo = () => {
	const { diagnosisHistory } = useContext(UserContext);
	const [xrays, setXrays] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (diagnosisHistory.length == 0) setLoading(false);
		else {
			diagnosisHistory.map((doc) => {
				getFile(doc.xRayId)
					.then((obj) => setXrays((prev) => [...prev, obj]))
					.catch((error) => console.error(error))
					.finally(() => setLoading(false));
			});
		}
	}, []);

	if (loading) return <Loader text="Loading past X-ray records" />;

	if (xrays.length == 0)
		return (
			<>
				<Navbar />
				<div className="flex flex-col items-center justify-center p-6 text-gray-600 min-h-screen bg-white">
					<FileImage className="h-10 w-10 mb-2" />
					<p>No past X-ray records available</p>
				</div>
				<Footer />
			</>
		);

	return (
		<div className="min-h-screen">
			<Navbar />

			<div className="p-6 min-h-screen bg-white">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">
					Past X-ray Records
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{xrays?.map((xray, idx) => (
						<div
							key={idx}
							className="flex flex-col items-center"
						>
							<img
								src={xray?.url}
								height={300}
								className="w-full h-auto rounded-lg shadow-md border border-gray-200"
								alt={`xray_${idx + 1}`}
							/>
							<h3>{xray?.date}</h3>
						</div>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Repo;
