const Background = () => {
	return (
		<>
			<video
				autoPlay
				muted
				loop
				className="fixed top-0 left-0 w-full h-full object-cover -z-20"
			>
				<source
					src="/bg.mp4"
					type="video/mp4"
				/>
				Your browser does not support HTML5 video.
			</video>
			<div
				id="overlay"
				className="fixed top-0 left-0 w-full h-full -z-10"
				style={{
					backgroundColor: "rgba(0, 0, 0, 0.6)"
				}}
			></div>
		</>
	);
};

export default Background;
