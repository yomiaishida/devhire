import React from "react";

export const Cardinner = ({ prof }) => {
  return (
    <div className="card-main">
      <div className="card-pic"></div>
      <div className="like-button">
        <div className="heart"></div>
      </div>
      <div className="card-name">
        <p className="card-dev-name">
          {prof.data.service_search_results.hits.source.diplay_name}
        </p>
        <p className="charge">$30000</p>
      </div>
      <div className="hire">Hire</div>
    </div>
  );
};
