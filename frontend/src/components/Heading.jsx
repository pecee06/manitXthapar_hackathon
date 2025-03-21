import { ShieldPlus } from "lucide-react";

const Heading = () => {
	return (
		<section>
			<h1
				className="text-[20vw] md:text-[15vw] min-h-screen big-shoulders-stencil leading-tight w-5/6 text-white mx-auto flex items-center justify-center text-center"
				style={{
					textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
				}}
			>
				<div>
					<div className="sm:hidden flex items-center justify-center my-5">
						<ShieldPlus className="h-20 w-20" />
					</div>
					<div>Revolutionizing Arthritis Care</div>
				</div>
			</h1>
		</section>
	);
};

export default Heading;
