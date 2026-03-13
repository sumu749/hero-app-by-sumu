import React from "react";
import hero from "../../assets/hero.png";
const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 py-16">
            <img className="max-w-full h-auto" src={hero} alt="Hero" />
            <div className="w-full min-h-80 flex flex-col justify-center items-center  bg-linear-to-br from-[#713ae6] to-[#9c60f1] p-10 text-white shadow-xl">
                <h1 className="text-4xl font-bold md:text-5xl">
                    Trusted by Millions, Built for You
                </h1>
                <div className="mt-8 flex gap-10 flex-col md:flex-row justify-center items-center ">
                    <div>
                        <p className="text-sm  tracking-wide opacity-80">
                            Total Downloads
                        </p>
                        <h2 className="text-5xl font-extrabold">29.6M</h2>
                        <p className="mt-1 text-sm opacity-80">
                            21% more than last month
                        </p>
                    </div>
                    <div>
                        <p className="text-sm  tracking-wide opacity-80">
                            Total Reviews
                        </p>
                        <h2 className="text-5xl font-extrabold">906K</h2>
                        <p className="mt-1 text-sm opacity-80">
                            46% more than last month
                        </p>
                    </div>
                    <div>
                        <p className="text-sm  tracking-wide opacity-80">
                            Active Apps
                        </p>
                        <h2 className="text-5xl font-extrabold">132+</h2>
                        <p className="mt-1 text-sm opacity-80">
                            31 more will launch
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
