import { server } from "../constants";
import axios from "axios";

const diagnose = async (history = []) => {
	try {
		if (history.length == 0) return;
		let p = "";
		history.forEach(
			(instance) => (p += `-> ${instance.remark} ${instance.date} `)
		);
		const response = await axios.post(
			`${server}/ai/feedback`,
			{ prompt: p },
			{
				headers: {
					"Content-Type": "multipart/form-data"
				}
			}
		);
		if (response.status >= 400) return null;
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export default diagnose;
