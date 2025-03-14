import { Databases, ID } from "appwrite";
import client from "./client";

const databases = new Databases(client);

export const createEntry = async (data) => {
	try {
		const result = await databases.createDocument(
			import.meta.env.VITE_APPWRITE_DB_ID, // databaseId
			import.meta.env.VITE_APPWRITE_RECORD_ID, // collectionId
			ID.unique(), // documentId
			data
		);
		if (!result) throw new Error("Unable to create DB entry");
		return result;
	} catch (error) {
		console.error(error);
	}
};
