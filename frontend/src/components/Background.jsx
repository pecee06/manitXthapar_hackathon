const Background = () => {
	return (
		<video
			autoPlay
			muted
			loop
			className="fixed top-0 left-0 w-full h-full object-cover -z-10"
		>
			<source
				src="/bg.mp4"
				type="video/mp4"
			/>
			Your browser does not support HTML5 video.
		</video>
	);
};

export default Background;
