import { Databases, ID, Query } from "appwrite";
import client from "./client";

const databases = new Databases(client);

export const createEntry = async ({ userId, xRayId, arthritisSeverity }) => {
	try {
		const result = await databases.createDocument(
			import.meta.env.VITE_APPWRITE_DB_ID, // databaseId
			import.meta.env.VITE_APPWRITE_RECORD_ID, // collectionId
			ID.unique(), // documentId
			{ userId, xRayId, arthritisSeverity }
		);
		if (!result) throw new Error("Unable to create DB entry");
		return result;
	} catch (error) {
		console.error(error);
	}
};

export const fetchEntries = async (userId) => {
	try {
		const result = await databases.listDocuments(
			import.meta.env.VITE_APPWRITE_DB_ID, // databaseId
			import.meta.env.VITE_APPWRITE_RECORD_ID, // collectionId
			[Query.equal("userId", userId)] // queries (optional)
		);
		if (!result) throw new Error("Unable to fetch DB entries");
		return result.documents;
	} catch (error) {
		console.error(error);
	}
};
