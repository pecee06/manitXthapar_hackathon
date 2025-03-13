import { Account, OAuthProvider } from "appwrite";
import { localhost } from "../constants";
import client from "./client";

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
