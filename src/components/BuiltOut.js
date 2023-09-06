import React from "react";

const BuiltOut = () => {
  return (
    <div
      className="mainDiv"
      style={{
        height: "450px",
        backgroundColor: "#e7e0e0",
        width:'80vw',
        margin:'auto',
        marginTop: "150px",
      }}
    >
      <div
        className="aheadFirstCol "
        style={{ margin: "70px 1%" }}
      >
        <p className="aheadP" style={{fontSize: 'medium'}}>Built out of frustration</p>
        <h1 data-aos="slide-right" data-aos-duration="1000" style={{fontSize: '50px'}}>
          Meet the ahead app
        </h1>
      </div>
      <div className="aheadSecondCol" style={{ margin: "200px 5%" }} data-aos="zoom-in" data-aos-duration="1000">
        <p style={{ lineHeight: "30px" }}>
          A personalized pocket coach that provides bite-sized, science-dirven
          tools to boost emotional intelligence.
        </p>
        <p style={{ marginTop: "15px", lineHeight: "30px" }}>
          Think of it as a pocket cheerleader towards a better, more fulfilling.
        </p>
      </div>
    </div>
  );
};

export default BuiltOut;
