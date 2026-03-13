import React from "react";
import Navbar from "../../Components/Header/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Components/Loading/Loading";

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <Navbar />
            {navigation.state === "loading" && <Loading overlay={true} />}
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Root;
