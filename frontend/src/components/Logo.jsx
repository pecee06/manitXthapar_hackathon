import { useNavigate } from "react-router";

const Logo = () => {
	const navigate = useNavigate();
	const src = "/logo.png";
	return (
		<img
			src={src}
			alt="Trademark"
			className="w-12 h-12 cursor-pointer"
			onClick={() => navigate("/")}
		/>
	);
};

export default Logo;
