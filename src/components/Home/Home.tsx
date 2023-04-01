import React from "react";
import image from "../../images/FirstIntro.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ReactPortfolio from "../ReactPortfolio/reactportfolio";
import VanillaPortfolio from "../VanillaPortfolio/vanillaportfolio";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="image-background banner-padding">
        <img src={image} className="photo-alter" alt="Michael Vautour" />
        <h1 className="tag">Hello, I’m Mike.</h1>
        <p className="tag">Software Developer</p>
      </header>
      <VanillaPortfolio />
      <ReactPortfolio />
      <Footer />
    </>
  );
};

export default Home;
