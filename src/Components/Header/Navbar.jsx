import { Github } from "lucide-react";
import React from "react";
import Logo from "../../assets/logo.png";

const Navbar = () => {
    const Links = (
        <>
            <li className="mr-4 text-xl font-semibold">Home</li>
            <li className="mr-4 text-xl font-semibold">Apps</li>
            <li className="mr-4 text-xl font-semibold">Installation</li>
        </>
    );
    return (
        <div className="navbar px-20 bg-base-100 shadow-sm">
            <div className=" navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {Links}
                    </ul>
                </div>
                <a className="flex">
                    <img src={Logo} alt="Logo" className="h-8 w-8 mr-2 " />
                    <span className="text-[#713ae6] text-2xl font-bold">
                        HERO.IO
                    </span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{Links}</ul>
            </div>
            <div className="navbar-end">
                <a className="btn rounded-md bg-linear-to-br from-[#713ae6] to-[#9c60f1] hover:opacity-90 transition-opacity text-white">
                    {<Github />}Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;
