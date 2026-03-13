import React from "react";

const Loading = ({
    size = "h-12 w-12",
    color = "border-blue-600",
    overlay = false,
}) => {
    const spinner = (
        <div
            className={`animate-spin rounded-full ${size} border-b-2 ${color}`}
        ></div>
    );

    if (overlay) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                {spinner}
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center py-20">{spinner}</div>
    );
};

export default Loading;
