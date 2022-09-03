import React from "react";
import Main from "./Main";

const Landing = () => {
  return (
    <>
      <div className="display">
        <div className="middle-line"></div>
        <div className="heading">
          Dev<span>Hire</span>
        </div>
        <div className="home">Home</div>
        <div className="search"></div>
        <div className="current"></div>
      </div>
      <div className="favorites display">
        <span className="like"></span>Favorites
      </div>
      <Main />
    </>
  );
};

export default Landing;
