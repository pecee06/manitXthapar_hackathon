import Button from "./Button";
import diagnose from "../api/diagnose";
import { useRef, useContext } from "react";
import { uploadFile } from "../appwrite_sdk/storage";
import { UserContext } from "../contexts/UserProvider";
import { StatusContext } from "../contexts/StatusProvider";
import { createEntry } from "../appwrite_sdk/db";
import { UploadCloud } from "lucide-react";

const FileUpload = () => {
	const fileRef = useRef(null);
	const { dets } = useContext(UserContext);
	const { setSeverityScore } = useContext(StatusContext);

	return (
		<form className="bg-slate-800 text-white flex flex-col md:flex-row gap-4 min-h-[12vh] p-4 justify-evenly items-center">
			<div className="bg-slate-700 text-gray-300 cursor-pointer rounded-lg px-4 py-3 flex items-center transition-all hover:bg-slate-600">
				<UploadCloud
					size={32}
					className="text-gray-300 mx-3"
				/>
				<input
					type="file"
					name="file"
					ref={fileRef}
					className="text-sm text-gray-400"
				/>
			</div>

			<Button
				text="Diagnose"
				styles="border hover:bg-white hover:text-black rounded-lg px-3 py-2"
				func={(e) => {
					e.preventDefault();
					diagnose({
						name: dets.name,
						file: fileRef.current.files[0]
					})
						.then((res) => {
							if (res) {
								setSeverityScore(res.data);
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
