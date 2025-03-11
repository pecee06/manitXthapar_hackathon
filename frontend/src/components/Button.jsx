const Button = ({ text, func, styles = "" }) => {
	return (
		<button
			onClick={func}
			className={`cursor-pointer transition-colors duration-200 ${styles}`}
		>
			{text}
		</button>
	);
};

export default Button;
