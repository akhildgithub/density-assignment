import React from "react";
import "../index.css";

const TrackerStatus = ({ title, description,noline }) => {
  return (
    <div className="tracker-item">
      <div className="circle filled"></div>
      <div className={`${noline?'':'line'}`}></div>
      <div className="item-name">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TrackerStatus;
