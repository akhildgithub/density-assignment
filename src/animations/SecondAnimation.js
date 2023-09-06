import React from "react";
import circle from "../assets/svg/circle.svg";
import ring from "../assets/svg/ring.svg";
import "../styles/secondAnimation.css";
import sunImage from "../assets/images/sun.png";
import ghost3 from '../assets/images/ghost3.png'

const SecondAnimation = () => {
  return (
    <div className="secondAnimation" >
      {/* adding the animations in this comaponent */}
        <div className="whiteCircle" data-aos="zoom-in" data-aos-duration="1000">
            <img src={sunImage} alt="sun-point" className="secondPoint" data-aos="zoom-in" data-aos-duration="1000" />
            <img src={ghost3} alt="ghost" className="secondPoint2" data-aos="zoom-in" data-aos-duration="1000" />
        </div>
        <img src="https://www.freepnglogos.com/uploads/flour-png/flour-orange-tropical-flower-clip-art-cliparts-7.png" width="50" alt="flowerImage" className="flowerImage" />
      <img src={circle} alt="circle shape" className="shape shape2" width="15" />
      <img src={ring} alt="ring shape" className="shape shape6" width="40" />
      <img src={circle} alt="circle shape" className="shape shape7" width="20"/>
      <img src={ring} alt="ring shape" className="shape shape8" width="60" />
      <img src={circle} alt="circle shape" className="shape shape9" width="30"/>
      <img src={circle} alt="circle shape" className="shape shape11" width="30"/>
      <svg className="secondquaterLeaf1" height="60" width="10">
        <circle cx="-20" cy="30" r="30" stroke="black" strokeWidth="0" fill="green" />
      </svg> 
      <svg className="secondquaterLeaf2" height="60" width="10">
        <circle cx="-20" cy="30" r="30" stroke="black" strokeWidth="0" fill="green" />
      </svg> 
    </div>
  );
};

export default SecondAnimation;
