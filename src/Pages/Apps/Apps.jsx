import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import appsData from "../../Utility/appsData.json";
import { Download } from "lucide-react";
import AppError from "../../assets/App-Error.png";

const Apps = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [filteredApps, setFilteredApps] = useState(appsData);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsSearching(true);
        const timer = setTimeout(() => {
            const filtered = appsData.filter((app) =>
                app.title.toLowerCase().includes(searchTerm.toLowerCase()),
            );
            setFilteredApps(filtered);
            setIsSearching(false);
        }, 300); // Simulate search delay

        return () => clearTimeout(timer);
    }, [searchTerm]);

    return (
        <div className="bg-base-200">
            <div className="container mx-auto items-center pb-20 pt-20 ">
                <div className="mb-8 text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        Our All Applications
                    </h1>
                    <p className="text-gray-600 mb-4">
                        Explore All Apps on the Market developed by us. We code
                        for Millions
                    </p>
                </div>
                <div className="flex  justify-between items-center mb-8">
                    <span className="text-xl font-semibold">
                        Total Apps: {appsData.length}
                    </span>
                    <input
                        type="text"
                        placeholder="Search apps..."
                        className="input input-bordered w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {filteredApps.length === 0 && !isSearching ? (
                    <div className="flex flex-col items-center mx-auto">
                        <img src={AppError} alt="Error" />
                    </div>
                ) : isSearching ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {filteredApps.map((app) => (
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
                                    <h2 className="card-title text-xl">
                                        {app.title}
                                    </h2>
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
                )}
            </div>
        </div>
    );
};

export default Apps;
