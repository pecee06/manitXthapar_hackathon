import { server } from "../constants";
import axios from "axios";

const uploadFile = async (file) => {
	try {
		console.log(file);

		const response = await axios.post(
			`${server}/upload`,
			{ file },
			{
				headers: {
					"Content-Type": "multipart/form-data"
				}
			}
		);
		if (response.status >= 400) return null;
		return response;
	} catch (error) {
		console.error(error);
	}
};

export default uploadFile;
