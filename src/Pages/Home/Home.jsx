import React from "react";
import Banner from "../../Components/Banner/Banner";
import Hero from "../../Components/Hero/Hero";
import MainSection from "../../Components/MainSection/MainSection";

const Home = () => {
    return (
        <>
            <div className="bg-base-200">
                <Banner />
                <Hero />
                <MainSection />
            </div>
        </>
    );
};

export default Home;
