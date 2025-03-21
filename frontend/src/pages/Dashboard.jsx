import FileUpload from "../components/FileUpload";
import ProgressReport from "../components/ProgressReport";
import Prediction from "../components/Prediction";
import StatusProvider from "../contexts/StatusProvider";

const Dashboard = () => {
	return (
		<StatusProvider>
			<section>
				<FileUpload />
				{/* <div className="flex justify-between mx-2 my-5 gap-0.5">
					<ProgressReport styles="w-3/4 h-[65vh] border" />
					<Prediction styles="w-1/4 h-[65vh] border" />
				</div> */}

				<div className="flex flex-col md:flex-row justify-between mx-2 my-5 gap-2">
					<ProgressReport styles="w-full md:w-[60%] min-h-[20vh] md:h-[65vh] border" />
					<Prediction styles="w-full md:w-[40%] min-h-[20vh] md:h-[65vh] border" />
				</div>
			</section>
		</StatusProvider>
	);
};

export default Dashboard;
