import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlay, faAppStore } from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content text-center mt-20">
                <div className="max-w-max">
                    <h1 className="text-7xl font-bold text-[#001931]">
                        We Build <br />{" "}
                        <span className="text-[#713ae6]">Productive</span> Apps
                    </h1>
                    <p className="py-6 text-[#627382]">
                        At HERO.IO , we craft innovative apps designed to make
                        everyday life simpler, smarter, and more exciting.{" "}
                        <br /> Our goal is to turn your ideas into digital
                        experiences that truly make an impact.
                    </p>
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noreferrer"
                        className="btn bg-linear-to-br from-[#713ae6] to-[#9c60f1] hover:opacity-90 transition-opacity text-white mr-2 text-xl"
                    >
                        <FontAwesomeIcon icon={faGooglePlay} /> Google Play
                    </a>
                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn bg-linear-to-br from-[#713ae6] to-[#9c60f1] hover:opacity-90 transition-opacity text-white text-xl"
                    >
                        <FontAwesomeIcon icon={faAppStore} /> App Store
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
