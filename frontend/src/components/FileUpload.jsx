import Button from "./Button";
import server_uploadFile from "../api/uploadFile";
import { useRef, useContext } from "react";
import { uploadFile } from "../appwrite_sdk/storage";
import { UserContext } from "../contexts/UserProvider";
import { StatusContext } from "../contexts/StatusProvider";
import { createEntry } from "../appwrite_sdk/db";

const FileUpload = () => {
	const fileRef = useRef(null);
	const { dets } = useContext(UserContext);
	const { setSeverityScore, setComment } = useContext(StatusContext);

	const severityMap = [
		"Healthy knee",
		"Doubtful joint narrowing with possible osteophytic lipping",
		"Definite presence of osteophytes and possible joint space narrowing",
		"Multiple osteophytes, definite joint space narrowing, with mild sclerosis",
		"Large osteophytes, significant joint narrowing, and severe sclerosis"
	];

	return (
		<form className="bg-gray-700 text-white flex h-[15vh] p-4 justify-evenly items-center">
			<input
				type="file"
				name="file"
				ref={fileRef}
			/>
			<Button
				text="Diagnose"
				styles="border rounded-lg px-3 py-2"
				func={(e) => {
					e.preventDefault();
					server_uploadFile({
						name: dets.name,
						file: fileRef.current.files[0]
					})
						.then((res) => {
							if (res) {
								setSeverityScore(res.data);
								setComment(severityMap[res.data]);
								uploadFile(fileRef.current.files[0])
									.then((response) => {
										createEntry({
											userId: dets.$id,
											xRayId: response.$id,
											arthritisSeverity: `${res.data}`
										})
											.then(() => console.log("File uploaded successfully"))
											.catch((error) => console.error(error));
									})
									.catch((error) => console.error(error));
							}
						})
						.catch((error) => console.error(error));
				}}
			/>
		</form>
	);
};

export default FileUpload;
