import React from "react";
import '../index.css'
import sunImage from "../assets/images/sun.png";

const HorizontalTracker = ({description,line,position}) => {
  return (
    <div>
      <img
        src={sunImage}
        alt="sun point"
        className="point"
        data-aos="zoom-in"
        data-aos-duration="1000"
      />
      <div className={`${line?'':'line'}`} data-aos="zoom-in" data-aos-duration="1000"></div>
      <div className="text" data-aos={`zoom-in${position}`} data-aos-duration="1000">
        {description}
      </div>
    </div>
  );
};

export default HorizontalTracker;
