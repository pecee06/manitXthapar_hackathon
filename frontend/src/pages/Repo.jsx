import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserProvider";
import { fetchEntries } from "../appwrite_sdk/db";
import { getFileURL } from "../appwrite_sdk/storage";

const Repo = () => {
	const { dets } = useContext(UserContext);
	const [xrays, setXrays] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchEntries(dets.$id)
			.then((res) => {
				res.documents.map((doc) =>
					getFileURL(doc.xRayId)
						.then((url) => setXrays((prev) => [...prev, url]))
						.then(() => setLoading(false))
				);
			})
			.catch((error) => console.error(error));
	}, []);

	if (loading) return <h1>Loading...</h1>;

	return (
		<div className="min-h-screen grid grid-cols-3 justify-evenly p-4 border-8 border-[#f93827] bg-[#FDFBEE] gap-1">
			{xrays?.map((xray, idx) => (
				<img
					key={idx}
					src={xray}
					height={300}
					alt={`xray_${idx + 1}`}
				/>
			))}
		</div>
	);
};

export default Repo;
