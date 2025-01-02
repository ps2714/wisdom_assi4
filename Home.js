import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-white p-3" data-aos="slide-right">
              MERN Stack Developer
            </h2>
            <div className="h-50">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="part2 d-flex flex-column justify-content-center align-items-center">
            <div className="h-50">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_z01bika0.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h2 className="text-white mt-4" data-aos="slide-left">
              Youtuber
            </h2>
          </div>
        </div>
        <div className="seprator-text">
          <span>TECHINFOYT</span>
        </div>
      </div>
    </>
  );
};

export default Home;
