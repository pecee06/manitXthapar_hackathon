import { useNavigate } from "react-router";

const Logo = () => {
	const navigate = useNavigate();
	const src = "/logo.png";
	return (
		<img
			src={src}
			alt="Trademark"
			className="w-20 h-20 cursor-pointer"
			onClick={() => navigate("/")}
		/>
	);
};

export default Logo;
