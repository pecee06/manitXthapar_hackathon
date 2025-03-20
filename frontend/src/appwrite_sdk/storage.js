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
		return result.data;
	} catch (error) {
		console.error(error);
	}
};

export const getFile = async (fileId) => {
	try {
		const url = storage.getFilePreview(
			import.meta.env.VITE_APPWRITE_STORE_ID, // bucketId
			fileId // fileId
		);
		if (!url) throw new Error("Unable to fetch the desired file");

		let date = (
			await storage.getFile(import.meta.env.VITE_APPWRITE_STORE_ID, fileId)
		).$createdAt;
		date = new Date(date);
		date = date.toLocaleString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: true
		});

		return { url, date };
	} catch (error) {
		console.error(error);
	}
};
