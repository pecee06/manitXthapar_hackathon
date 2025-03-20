import { server } from "../constants";
import axios from "axios";

const diagnose = async ({ name, file }) => {
	try {
		if (!name || !file) return;
		const response = await axios.post(
			`${server}/prediction`,
			{ name, file },
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

export default diagnose;
