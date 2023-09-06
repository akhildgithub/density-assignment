import React from "react";
import circle from "../assets/svg/circle.svg";
import ring from "../assets/svg/ring.svg";
import "../styles/firstAnimation.css";

const FirstAnimation = () => {
  return (
    <div className="home-right">
      {/* adding the animations in this comaponent */}
      <img src={circle} alt="circle shape" className="shape shape-1" width="25" />
      <img src={circle} alt="circle shape" className="shape shape-2" width="15" />
      <img src={circle} alt="circle shape" className="shape shape-3" width="30" />
      <img src={ring} alt="ring shape" className="shape shape-4" width="60" />
      <img src={ring} alt="ring shape" className="shape shape-5" width="40" />
      <img src={ring} alt="ring shape" className="shape shape-6" width="40" />
      <img src={circle} alt="circle shape" className="shape shape-7" width="20"/>
      <img src={ring} alt="ring shape" className="shape shape-8" width="60" />
      <img src={circle} alt="circle shape" className="shape shape-9" width="30"/>
      <img src={ring} alt="ring shape" className="shape shape-10" width="40" />
      <img src={circle} alt="circle shape" className="shape shape-11" width="30"/>
      <svg className="quaterLeaf" height="100" width="90">
        <circle cx="-20" cy="30" r="30" stroke="black" strokeWidth="0" fill="green" />
      </svg> 
    </div>
  );
};

export default FirstAnimation;
