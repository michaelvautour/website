import React from "react";
import image from "../../images/FirstIntro.jpg";
import "./home.css";

const Home = () => {
  return (
    <header className="image-background banner-padding">
      <img src={image} className="photo-alter" alt="Michael Vautour" />
      <h1 className="tag">Hello, I’m Mike.</h1>
      <p className="tag">Software Developer</p>
    </header>
  );
};

export default Home;
