import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserProvider";
import { fetchEntries } from "../appwrite_sdk/db";
import { getFile } from "../appwrite_sdk/storage";

const Repo = () => {
	const { dets } = useContext(UserContext);
	const [xrays, setXrays] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchEntries(dets.$id)
			.then((res) => {
				res.documents.map((doc) =>
					getFile(doc.xRayId)
						.then((obj) => setXrays((prev) => [...prev, obj]))
						.then(() => setLoading(false))
				);
			})
			.catch((error) => console.error(error));
	}, []);

	if (loading) return <h1>Loading...</h1>;

	return (
		<div className="min-h-screen grid grid-cols-3 justify-evenly p-4 border-8 border-[#f93827] bg-[#FDFBEE] gap-1">
			{xrays?.map((xray, idx) => (
				<div
					key={idx}
					className="flex flex-col items-center"
				>
					<img
						src={xray?.url}
						height={300}
						alt={`xray_${idx + 1}`}
					/>
					<h3>{xray?.date}</h3>
				</div>
			))}
		</div>
	);
};

export default Repo;
