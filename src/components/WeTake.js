import React from "react";
import "../index.css";
import signature from '../assets/images/signature.png'

const WeTake = () => {
  return (
    <div className="weTake">
      {/* sub heading heading of the component */}
      <p style={{ fontSize: "20px", margin: "5px" }}>We take privacy serioulsy</p>
      {/* main heading heading of the component */}
      <h1 data-aos="zoom-in-up" data-aos-duration="1000">
        Before you get started
      </h1>
      {/* small description */}
      <h2>
        "We won't share your answers with anyone (and won't ever tell you which
        friends said what about you)"
      </h2>
      {/* signature */}
      <p style={{ fontSize: "20px", margin: "5px" }}>
        with love,{" "}
        <img src={signature} alt="signature" data-aos="zoom-in-down" data-aos-duration="1000" style={{ width: "150px"}} />
      </p>
      <br />
      {/* start test button */}
      <button
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="bg-black text-white rounded-full py-2 px-4"
      >
        Start a test
      </button>
      <h5>Take only 5 minutes</h5>
    </div>
  );
};

export default WeTake;
