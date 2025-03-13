import { Client } from "appwrite";
import { appwrite_api_endpoint } from "../constants";

const client = new Client()
	.setEndpoint(appwrite_api_endpoint) // Your API Endpoint
	.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your project ID

export default client;
