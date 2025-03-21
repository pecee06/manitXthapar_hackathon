import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserProvider";
import { FileImage, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

	if (loading)
		return (
			<>
				<Navbar />
				<div className="flex items-center justify-center p-6 bg-white min-h-screen">
					<Loader2 className="animate-spin h-8 w-8 text-blue-600 mr-2" />
					<p className="text-gray-600">Loading past X-ray records...</p>
				</div>
				<Footer />
			</>
		);

	if (xrays.length == 0)
    return (
			<>
				<Navbar />
				<div className="flex flex-col items-center justify-center p-6 text-gray-600">
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
				<h3 className="text-xl font-semibold text-gray-800 mb-4">Past X-ray Records</h3>
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
	);

export default Repo;