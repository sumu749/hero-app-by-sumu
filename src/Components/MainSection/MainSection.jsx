import React from "react";
import { Link } from "react-router";
import appsData from "../../Utility/appsData.json";
import { Download } from "lucide-react";

const MainSection = () => {
    const topApps = appsData.slice(0, 8);

    return (
        <div className="container mx-auto items-center pb-20">
            <div className="mb-8 text-center">
                <h1 className="text-5xl font-bold pb-4">Trending Apps</h1>
                <p className="text-gray-600">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {topApps.map((app) => (
                    <Link
                        key={app.id}
                        to={`/apps/${app.id}`}
                        className="card bg-base-100 shadow-sm w-full hover:shadow-md transition-shadow"
                    >
                        <figure className="px-10 pt-10">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="rounded-xl w-80 h-80 object-cover"
                            />
                        </figure>
                        <div className="card-body p-4 items-center justify-between">
                            <h2 className="card-title text-xl">{app.title}</h2>
                            <div className="card-actions gap-2">
                                <span className="bg-[#f1f5e8] text-[#00d390] w-28 h-9 rounded-md flex items-center justify-center gap-1">
                                    <Download />
                                    {app.downloads.toLocaleString()}
                                </span>
                                <span className="bg-[#fff0e1] text-[#ff8811] w-28 h-9 rounded-md flex items-center justify-center">
                                    ⭐ {app.ratingAvg}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex justify-center mt-10 ">
                <Link
                    to="/apps"
                    className="btn px-8 bg-linear-to-br from-[#713ae6] to-[#9c60f1] hover:opacity-90 transition-opacity text-white"
                >
                    Show All
                </Link>
            </div>
        </div>
    );
};

export default MainSection;
