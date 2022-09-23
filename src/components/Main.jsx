import React from "react";

const Main = () => {
  return (
    <>
      <h1 className="main-heading">Hire Top Developers</h1>;
      <div className="container">
        <div className="card-container">
          <div className="card">
            <div className="card-main">
              <div className="card-pic"></div>
              <div className="like-button">
                <div className="heart"></div>
              </div>
              <div className="card-name">
                <p className="card-dev-name">Dominos</p>
                <p className="charge">$30000</p>
              </div>
              <div className="hire">Hire</div>
            </div>
          </div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </>
  );
};

export default Main;
