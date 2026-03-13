import React from "react";
import PageNotFound from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <img
                    src={PageNotFound}
                    alt="Page not found"
                    className="mx-auto mb-8 w-64 h-64"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Oops! Page Not Found
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-linear-to-br from-purple-600 to-purple-800 hover:opacity-90 transition-opacity text-white rounded-lg"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
