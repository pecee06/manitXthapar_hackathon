import React from "react";
import { FileImage, ShieldCheck, Users, BrainCircuit, ArrowBigRight, ShieldPlus } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const About = () => {
	const navigate = useNavigate();

	return (
		<div>
			<section>
				<h1
					className="text-[20vw] md:text-[15vw] min-h-screen big-shoulders-stencil leading-tight w-5/6 text-white mx-auto flex items-center justify-center text-center"
					style={{ 
						textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
					}}
				>
					<div>
					<div className="sm:hidden flex items-center justify-center my-5"><ShieldPlus className="h-20 w-20" /></div>
					<div>Revolutionizing Arthritis Care</div>
					</div>
				</h1>
			</section>

			{/* Hero Section */}
			<section className="bg-gray-50 shadow-lg py-20">
				<div className="container mx-auto text-center px-6">
					<h1 className="text-5xl font-extrabold text-blue-900">Welcome to ArthroScan</h1>
					<p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
						Leverage AI-powered knee X-ray analysis to diagnose and track arthritis progression, all in one secure platform.
						By using advanced machine learning algorithms, our platform enables healthcare professionals to quickly diagnose arthritis, accurately assess its severity, and monitor the progression of the condition over time.
					</p>
					<button className="mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer"
						onClick={() => navigate("/login")}>
						Get Started <span><ArrowBigRight className="w-6 h-6 inline-block ml-2" /></span>
					</button>
				</div>
			</section>

			<section id="features" className="py-16 bg-gray-50">
				<div className="container mx-auto text-center px-6">
					<h2 className="text-4xl font-extrabold text-gray-800 mb-12">Key Features</h2>

					<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
						{/* Feature 1: Upload X-ray */}
						<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-2 duration-300 ease-in-out">
							<FileImage className="text-orange-500 w-20 h-20 mb-4" />
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Upload X-ray Images</h3>
							<p className="text-center text-gray-600">
								Seamlessly upload knee X-ray images for instant analysis.
							</p>
						</div>

						{/* Feature 2: Image Analysis */}
						<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-2 duration-300 ease-in-out">
							<BrainCircuit className="w-20 h-20 mb-4" />
							<h3 className="text-xl font-semibold mb-2 text-gray-800">AI-Powered Analysis</h3>
							<p className="text-center text-gray-600">
								Our AI-powered model analyzes the X-rays and predicts the severity of arthritis.
							</p>
						</div>

						{/* Feature 3: Security */}
						<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-2 duration-300 ease-in-out">
							<ShieldCheck className="text-green-600 w-20 h-20 mb-4" />
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Data Security</h3>
							<p className="text-center text-gray-600">
								All patient data is securely stored and processed with utmost confidentiality.
							</p>
						</div>

						{/* Feature 4: Track Progress */}
						<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-2 duration-300 ease-in-out">
							<p className="text-6xl w-20 h-20 mb-4">📈</p>
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Track Progress</h3>
							<p className="text-center text-gray-600">
								View and track the progression of arthritis over time with historical data.
							</p>
						</div>

						{/* Feature 5: Detailed Reports */}
						<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-2 duration-300 ease-in-out">
							<p className="text-6xl w-20 h-20 mb-4">📄</p>
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Detailed Reports</h3>
							<p className="text-center text-gray-600">
								Generates comprehensive reports to help clinicians create personalized treatment plans.
							</p>
						</div>

						{/* Feature 6: Scalability */}
						<div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-2 duration-300 ease-in-out">
							<Users className="text-slate-600 w-20 h-20 mb-4" />
							<h3 className="text-xl font-semibold mb-2 text-gray-800">Scalable</h3>
							<p className="text-center text-gray-600">
								Designed for hospitals, research institutions, and large-scale healthcare networks.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 pb-20 bg-gray-50">
				<div className="container mx-auto text-center px-6">
					<h2 className="text-4xl font-extrabold text-gray-800 mb-12">About ArthroScan</h2>
					<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
						ArthroScan is an AI-powered solution designed to revolutionize arthritis diagnosis and monitoring. By leveraging advanced deep learning techniques, we provide precise and reliable assessments, helping healthcare professionals make data-driven decisions with confidence.
					</p>
					<br></br>
					<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
						In addition to its diagnostic capabilities, ArthroScan also plays a crucial role in improving the overall efficiency of medical practices. It reduces the time and effort required to manually interpret X-ray results, ensuring that resources are utilized more effectively, which is especially important in busy healthcare environments. By providing automated and accurate readings, ArthroScan supports clinicians in making faster, more informed decisions without sacrificing the quality of patient care.
					</p>
				</div>
			</section>
		</div>
	);
};

export default About;
