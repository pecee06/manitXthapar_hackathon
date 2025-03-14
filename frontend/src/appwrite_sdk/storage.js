import { Storage, ID } from "appwrite";
import client from "./client";

const storage = new Storage(client);

export const uploadFile = async (file) => {
	try {
		const result = await storage.createFile(
			import.meta.env.VITE_APPWRITE_STORE_ID, // bucketId
			ID.unique(), // fileId
			file
		);
		if (!result) throw new Error("Unable to upload file");
		return result;
	} catch (error) {
		console.error(error);
	}
};
