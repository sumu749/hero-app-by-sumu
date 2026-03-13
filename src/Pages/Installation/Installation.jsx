import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import appsData from "../../Utility/appsData.json";
import { Download, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import AppError from "../../assets/App-Error.png";

const Installation = () => {
    const [installedApps, setInstalledApps] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        const installedIds = JSON.parse(
            localStorage.getItem("installedApps") || "[]",
        );
        const installed = appsData.filter((app) =>
            installedIds.includes(app.id),
        );
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInstalledApps(installed);
    }, []);

    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortOrder === "High-Low") {
            return b.downloads - a.downloads;
        } else if (sortOrder === "Low-High") {
            return a.downloads - b.downloads;
        }
        return 0;
    });

    const handleUninstall = (appId) => {
        const installedIds = JSON.parse(
            localStorage.getItem("installedApps") || "[]",
        );
        const updatedIds = installedIds.filter((id) => id !== appId);
        localStorage.setItem("installedApps", JSON.stringify(updatedIds));
        setInstalledApps((prev) => prev.filter((app) => app.id !== appId));
        toast.success("App uninstalled successfully!");
    };

    return (
        <div className="bg-base-200">
            <div className="container mx-auto items-center pb-20 pt-20 ">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">
                        Your Installed Apps
                    </h1>
                    <p className="text-gray-600 mb-4">
                        Explore All Trending Apps on the Market developed by us
                    </p>
                </div>
                <div className="flex justify-between items-center mb-8">
                    <span className="text-xl font-semibold">
                        Installed Apps: {installedApps.length}
                    </span>
                    {installedApps.length > 0 && (
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="select select-bordered w-48"
                        >
                            <option value="" disabled>
                                Sort By Downloads
                            </option>
                            <option value="High-Low">High-Low</option>
                            <option value="Low-High">Low-High</option>
                        </select>
                    )}
                </div>
                {installedApps.length === 0 ? (
                    <div className="flex flex-col items-center mx-auto">
                        <img src={AppError} alt="No apps installed" />
                        <p className="text-gray-600 mt-4">
                            No apps installed yet. Go to Apps page to install
                            some!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {sortedApps.map((app) => (
                            <div
                                key={app.id}
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
                                    <div className="card-actions justify-between gap-2">
                                        <span className="bg-[#f1f5e8] text-[#00d390] w-28 h-9 rounded-md flex items-center justify-center gap-1">
                                            <Download />
                                            {app.downloads.toLocaleString()}
                                        </span>
                                        <span className="bg-[#fff0e1] text-[#ff8811] w-28 h-9 rounded-md flex items-center justify-center">
                                            ⭐ {app.ratingAvg}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => handleUninstall(app.id)}
                                        className="bg-red-500 text-white w-28 h-9 rounded-md flex items-center justify-center gap-1 hover:bg-red-600 transition-colors"
                                    >
                                        <Trash2 size={16} />
                                        Uninstall
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Installation;
