import React from "react";
import { useParams } from "react-router";
import appsData from "../../Utility/appsData.json";

const AppDetails = () => {
    const { id } = useParams();
    const app = appsData.find((app) => app.id === parseInt(id));

    if (!app) {
        return <div>App not found</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
            <img src={app.image} alt={app.title} className="w-32 h-32 mb-4" />
            <p>
                <strong>Company:</strong> {app.companyName}
            </p>
            <p>
                <strong>Description:</strong> {app.description}
            </p>
            <p>
                <strong>Size:</strong> {app.size} MB
            </p>
            <p>
                <strong>Reviews:</strong> {app.reviews}
            </p>
            <p>
                <strong>Average Rating:</strong> {app.ratingAvg}
            </p>
            <p>
                <strong>Downloads:</strong> {app.downloads}
            </p>
            <h3>Ratings:</h3>
            <ul>
                {app.ratings.map((rating) => (
                    <li key={rating.name}>
                        {rating.name}: {rating.count}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppDetails;
