import Button from "../components/Button";
import { loginWithGoogle } from "../appwrite_sdk/account";

const Login = () => {
	return (
		<main className="bg-black h-screen flex flex-col items-center justify-center">
			<Button
				text="Continue With Google"
				func={loginWithGoogle}
			/>
		</main>
	);
};

export default Login;
