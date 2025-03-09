import { Client, Account, OAuthProvider } from "appwrite";
import { localhost, appwrite_api_endpoint } from "../constants";

const client = new Client()
	.setEndpoint(appwrite_api_endpoint)
	.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your project ID

const account = new Account(client);

export const getCurrentUser = async () => {
	try {
		const result = await account.get();
		if (!result) return null;
		return result;
	} catch (error) {
		console.error(error);
	}
};

export const loginWithGoogle = () => {
	account.createOAuth2Session(
		OAuthProvider.Google,
		localhost, // success
		`${localhost}/login_failed` // failure
	);
};

export const sdk_logout = async () => {
	try {
		const result = await account.deleteSession("current");
		if (!result) throw new Error("Unable to logout from current session");
	} catch (error) {
		console.error(error);
	}
};
