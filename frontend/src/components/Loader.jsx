import { Loader2 } from "lucide-react";

const Loader = ({ text }) => {
	return (
		<div className="flex items-center justify-center p-6 bg-white h-full w-full">
			<Loader2 className="animate-spin h-8 w-8 text-blue-600 mr-2" />
			<p className="text-gray-600">{text}...</p>
		</div>
	);
};

export default Loader;
