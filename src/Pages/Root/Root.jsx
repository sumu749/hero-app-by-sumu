import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar />
            {navigation.state === "loading" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                </div>
            )}
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Root;
