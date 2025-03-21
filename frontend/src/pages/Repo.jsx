// import { useContext, useState, useEffect } from "react";
// import { UserContext } from "../contexts/UserProvider";
// import { fetchEntries } from "../appwrite_sdk/db";
// import { getFileURL } from "../appwrite_sdk/storage";

// const Repo = () => {
// 	const { dets } = useContext(UserContext);
// 	const [xrays, setXrays] = useState([]);
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		fetchEntries(dets.$id)
// 			.then((res) => {
// 				res.documents.map((doc) =>
// 					getFileURL(doc.xRayId)
// 						.then((url) => setXrays((prev) => [...prev, url]))
// 						.then(() => setLoading(false))
// 				);
// 			})
// 			.catch((error) => console.error(error));
// 	}, []);

// 	if (loading) return <h1>Loading...</h1>;

// 	return (
// 		<div className="min-h-screen grid grid-cols-3 justify-evenly p-4 border-8 border-[#f93827] bg-[#FDFBEE] gap-1">
// 			{xrays?.map((xray, idx) => (
// 				<img
// 					key={idx}
// 					src={xray}
// 					height={300}
// 					alt={`xray_${idx + 1}`}
// 				/>
// 			))}
// 		</div>
// 	);
// };

// export default Repo;


import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserProvider";
import { fetchEntries } from "../appwrite_sdk/db";
import { getFileURL } from "../appwrite_sdk/storage";
import { FileImage, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Repo = () => {
	const { dets } = useContext(UserContext);
	const [xrays, setXrays] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null); // Added error state

	useEffect(() => {
		const loadXrays = async () => {
			try {
				const res = await fetchEntries(dets.$id);
				const imageUrls = await Promise.all(
					res.documents.map(async (doc) => {
						return await getFileURL(doc.xRayId);
					})
				);
				setXrays(imageUrls);
				setLoading(false);
			} catch (err) {
				console.error(err);
				setError("Failed to load past X-ray records.");
				setLoading(false);
			}
		};

		loadXrays();
	}, [dets.$id]);

	if (loading) {
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
	}

	if (error) {
		return (
			<>
				<Navbar />
				<div className="flex items-center justify-center p-6 text-red-600 bg-white min-h-screen">
					{error}
				</div>
				<Footer />
			</>
		);
	}

	if (!xrays || xrays.length === 0) {
		return (
			<>
				<Navbar />
				<div className="flex flex-col items-center justify-center p-6 text-gray-600">
					<FileImage className="h-10 w-10 mb-2" />
					<p>No past X-ray records available.</p>
				</div>
				<Footer />
			</>
		);
	}

	return (
		<div className="min-h-screen">
			<Navbar />
			<div className="p-6 min-h-screen bg-white">
				<h3 className="text-xl font-semibold text-gray-800 mb-4">Past X-ray Records</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{xrays.map((xray, idx) => (
						<img
							key={idx}
							src={xray}
							alt={`X-ray ${idx + 1}`}
							className="w-full h-auto rounded-lg shadow-md border border-gray-200"
						/>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Repo;