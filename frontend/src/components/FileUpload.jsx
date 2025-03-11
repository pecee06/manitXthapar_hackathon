import Button from "./Button";
import uploadFile from "../api/uploadFile";
import { useRef } from "react";

const FileUpload = () => {
	const fileRef = useRef(null);
	return (
		<form className="bg-gray-700 text-white flex h-[15vh] p-4 justify-evenly items-center">
			<input
				type="file"
				name="file"
				ref={fileRef}
			/>
			<Button
				text="Upload"
				styles="border rounded-lg px-3 py-2"
				func={(e) => {
					e.preventDefault();
					uploadFile(fileRef.current.files[0])
						.then((res) => res && console.log("File uploaded"))
						.catch((error) => console.error(error));
				}}
			/>
		</form>
	);
};

export default FileUpload;
