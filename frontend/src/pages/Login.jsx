import Button from "../components/Button";
import { loginWithGoogle } from "../appwrite_sdk/account";

const Login = () => {
	return (
		<main className="bg-black h-screen flex flex-col items-center justify-center">
			<Button
				text="Continue With Google"
				func={loginWithGoogle}
				styles="text-lg px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white w-fit"
			/>
		</main>
	);
};

export default Login;
