import React, { useState } from "react";
import { useParams } from "react-router";
import { Download } from "lucide-react";
import { Star } from "lucide-react";
import { MessageSquareDiff } from "lucide-react";
import appsData from "../../Utility/appsData.json";
import { toast } from "react-toastify";
import ErrorPage from "../ErrorPage/ErrorPage";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
    const { id } = useParams();
    const app = appsData.find((app) => app.id === parseInt(id));
    const [installed, setInstalled] = useState(false);

    if (!app) {
        return <ErrorPage />;
    }

    const handleInstall = () => {
        setInstalled(true);
        toast.success("App installed successfully!");
    };

    return (
        <div className="bg-base-200 pb-20">
            <div className="container mx-auto p-4">
                {/* App Information */}
                <div className="mb-8 mt-20">
                    <div className="flex flex-col md:flex-row items-start">
                        <img
                            src={app.image}
                            alt={app.title}
                            className="w-80 h-80 mb-4 md:mb-0 md:mr-6"
                        />
                        <div className="flex-1">
                            <div className="mb-4">
                                <h1 className="text-3xl font-bold mb-2">
                                    {app.title}
                                </h1>
                                <p className="mt-2 text-[#713ae6] font-semibold">
                                    <strong className="text-gray-500">
                                        Developed By:
                                    </strong>{" "}
                                    {app.companyName}
                                </p>
                            </div>
                            <hr className="text-gray-400" />
                            <div className="flex gap-8 mt-8 items-center mb-8">
                                <div className=" flex flex-col items-center ">
                                    <Star />
                                    <p className="text-xl font-semibold mb-2 mt-2">
                                        Average Ratings
                                    </p>
                                    <h2>{app.ratingAvg}</h2>
                                </div>
                                <div className="flex flex-col items-center ">
                                    <Download />
                                    <p className="text-xl font-semibold mb-2 mt-2">
                                        Downloads
                                    </p>
                                    <h2>{app.downloads}</h2>
                                </div>
                                <div className="flex flex-col items-center ">
                                    <MessageSquareDiff />
                                    <p className="text-xl font-semibold mb-2 mt-2">
                                        Total Reviews
                                    </p>
                                    <h2>{app.reviews}</h2>
                                </div>
                            </div>
                            <button
                                onClick={handleInstall}
                                disabled={installed}
                                className={`px-4 py-2 rounded ${installed ? "bg-gray-400 cursor-not-allowed" : "bg-linear-to-br from-[#713ae6] to-[#9c60f1] hover:opacity-90 transition-opacity text-white px-6 py-3"}`}
                            >
                                {installed ? "Installed" : "Install"}
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="text-gray-400" />

                {/* App Review Chart */}
                <div className="mb-8 mt-8">
                    <h2 className="text-3xl font-bold mb-4">Ratings</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={app.ratings}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <hr className="text-gray-400 mb-8" />
                {/* App Description */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">App Description</h2>
                    <p className="text-lg">{app.description}</p>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;
