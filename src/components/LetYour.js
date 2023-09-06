import React from "react";
import "../index.css";
import HorizontalTracker from "../reUseableComponents/HorizontalTracker";

const LetYour = () => {
  return (
    <div className="letYourDiv">
      {/* heading of the component */}
      <div>
        <p style={{ textAlign: "center" }}>
          Let your friends, family, and co-workers (anonymously) rate your
          social skills.
        </p>
        <h1
          style={{ textAlign: "center" }}
          className="aheadH1"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          Ever wondered what others think about you?
        </h1>
      </div>
      {/* first horizontal path/tracker */}
      <div className="horizontal-tracker1">
        <HorizontalTracker position='-right' description="Answer the questions on ahead app on your social skills" />
        <HorizontalTracker position='' description="Let others anonymously answer the same questions about you" />
        <HorizontalTracker
          description="Find out where you and others see things the same way or not"
          line
          position='-left'
        />
      </div>
      {/* second horizontal path/tracker */}
      <div className="horizontal-tracker2">
        <div className="first">
          <div className="point" />
          <div className="line"></div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="text">
            You
          </div>
        </div>
        <div className="second">
          <div className="point" />
          <div className="line"></div>
          <div data-aos="zoom-in" data-aos-duration="1500" className="text">
            Anonymous1
          </div>
        </div>
        <div className="third">
          <div className="point" />
          <div className="line"></div>
          <div data-aos="zoom-in" data-aos-duration="2500" className="text">
            Anonymous2
          </div>
        </div>
        <div className="fourth">
          <div className="point" />
          <div data-aos="zoom-in" data-aos-duration="3000" className="text">
            Anonymous3
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetYour;
