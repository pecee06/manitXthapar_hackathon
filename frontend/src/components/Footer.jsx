import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Contact Us</h3>

                    {/* Address */}
                    <p className="flex my-1 items-center gap-2">
                        <MapPin size={18} />
                        7, Medical Lane, <br></br>MANIT Bhopal : 462001, <br></br>India
                    </p>

                    {/* Email */}
                    <p className="flex my-1 items-center gap-2">
                        <Mail size={18} />
                        info@arthoscan.com
                    </p>

                    {/* Phone */}
                    <p className="flex my-1 items-center gap-2">
                        <Phone size={18} />
                        +91 12345 67890
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                    <ul>
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/services" className="hover:underline">Services</a></li>
                        <li><a href="/blog" className="hover:underline">Blog</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <form action="/subscribe" method="post" className="mt-2">
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className="p-2 rounded text-gray-800 w-full"
                        />
                        <button
                            type="submit"
                            className="bg-blue-700 text-white px-4 py-2 rounded mt-2 w-full hover:scale-105 cursor-pointer transition-all duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Social Media Icons */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-700"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-blue-700"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-blue-700"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-blue-700"><Instagram size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p>&copy; {new Date().getFullYear()} ArthoScan. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |
                    <a href="/terms-of-service" className="hover:underline"> Terms of Service</a> |
                    <a href="/accessibility" className="hover:underline"> Accessibility Statement</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;