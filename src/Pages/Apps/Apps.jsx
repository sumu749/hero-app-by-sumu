import React from "react";
import { Link } from "react-router";
import appsData from "../../Utility/appsData.json";

const Apps = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">All Apps</h1>
            <p className="text-gray-600 mb-4">Explore all available apps</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {appsData.map((app) => (
                    <Link
                        key={app.id}
                        to={`/apps/${app.id}`}
                        className="card bg-base-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <figure>
                            <img
                                src={app.image}
                                alt={app.title}
                                className="w-full h-32 object-cover"
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-sm">{app.title}</h2>
                            <p className="text-xs text-gray-500">
                                {app.downloads.toLocaleString()} downloads
                            </p>
                            <p className="text-xs">⭐ {app.ratingAvg}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Apps;
