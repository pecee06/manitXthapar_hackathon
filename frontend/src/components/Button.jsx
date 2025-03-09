const Button = ({ text, func }) => {
	return (
		<button
			onClick={func}
			className="text-lg px-4 py-2 cursor-pointer transition-colors duration-200 hover:bg-gray-600 rounded bg-gray-700 text-white w-fit"
		>
			{text}
		</button>
	);
};

export default Button;
