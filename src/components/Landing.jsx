import React from "react";

const Landing = () => {
  return (
    <>
      <div className="display">
        <div className="middle-line"></div>
        <div className="heading">DevHire</div>
        <div className="home">Home</div>
        <div className="search"></div>
        <div className="current"></div>
      </div>
      <div className="favorites display">
        <span className="like"></span>Favorites
      </div>
    </>
  );
};

export default Landing;
