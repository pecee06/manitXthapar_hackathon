import {
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	Mail,
	Phone,
	MapPin
} from "lucide-react";
import { Link } from "react-router";
import Button from "./Button";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-10">
			<div className="gap-8 flex justify-around px-6">
				{/* Contact */}
				<div>
					<h3 className="text-xl font-semibold mb-2">Contact Us</h3>
					<p className="flex my-1 items-center gap-2">
						<MapPin size={18} />
						MANIT Bhopal : 462003 <br />
						India
					</p>
					<p className="flex my-1 items-center gap-2">
						<Mail size={18} />
						xxx@yy.zzz
					</p>
					<p className="flex my-1 items-center gap-2">
						<Phone size={18} />
						+91 xxxxxxxxxx
					</p>
				</div>

				{/* Newsletter Signup */}
				<div>
					<h3 className="text-xl font-semibold mb-2">Newsletter</h3>
					<p>Subscribe to our newsletter for the latest updates.</p>
					<Button
						text="Subscribe"
						styles="bg-blue-700 text-white px-4 py-2 rounded mt-2 w-full hover:scale-105 cursor-pointer transition-all duration-300"
					/>
				</div>

				{/* Social Media Icons */}
				<div>
					<h3 className="text-xl font-semibold mb-2">Follow Us</h3>
					<div className="flex space-x-4">
						<a
							href="#"
							className="hover:text-blue-700"
							target="_blank"
						>
							<Facebook size={20} />
						</a>
						<a
							href="#"
							className="hover:text-blue-700"
							target="_blank"
						>
							<Twitter size={20} />
						</a>
						<a
							href="#"
							className="hover:text-blue-700"
							target="_blank"
						>
							<Linkedin size={20} />
						</a>
						<a
							href="#"
							className="hover:text-blue-700"
							target="_blank"
						>
							<Instagram size={20} />
						</a>
					</div>
				</div>
			</div>

			{/* Copyright Section */}
			<div className="border-t border-gray-700 mt-8 pt-4 text-center">
				<p>&copy; {new Date().getFullYear()} ArthoScan. All rights reserved.</p>
				<div className="mt-2 flex justify-center gap-2">
					<p className="hover:underline">Privacy Policy |</p>
					<p className="hover:underline"> Terms of Service |</p>
					<p className="hover:underline"> Accessibility Statement</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
