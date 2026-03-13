import React from "react";
import { Facebook, Twitter, Linkedin, Github, Mail } from "lucide-react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 ">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 ">
                <div>
                    <Link to="/" className="flex mb-4">
                        <img src={Logo} alt="Logo" className="h-8 w-8 mr-2 " />
                        <span className="text-[#713ae6] text-2xl font-bold">
                            HERO.IO
                        </span>
                    </Link>
                    <p className="text-sm">
                        Building modern and scalable Web Applications and Mobile
                        Apps with clean UI and powerful technology.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Resources
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Terms & Conditions
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">
                        Connect
                    </h3>

                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition">
                            <Facebook size={20} />
                        </a>

                        <a href="#" className="hover:text-white transition">
                            <Twitter size={20} />
                        </a>

                        <a href="#" className="hover:text-white transition">
                            <Linkedin size={20} />
                        </a>

                        <a href="#" className="hover:text-white transition">
                            <Github size={20} />
                        </a>

                        <a href="#" className="hover:text-white transition">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} HERO.IO. All rights reserved.
            </div>
        </footer>
    );
}
