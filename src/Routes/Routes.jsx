import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: ErrorPage,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "apps",
                Component: Apps,
            },
            {
                path: "apps/:id",
                Component: AppDetails,
            },
            {
                path: "installation",
                Component: Installation,
            },
        ],
    },
]);
