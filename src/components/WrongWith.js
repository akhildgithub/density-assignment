import React from "react";
import "../index.css";
import TrackerStatus from "../reUseableComponents/TrackerStatus";
import ghost2 from "../assets/images/ghost2.jpeg";

const WrongWith = () => {
  return (
    <div
      className="mainDiv"
      style={{ display: "flex", flexDirection: "column", marginTop: "60px" }}
    >
      {/* subheading */}
      <p style={{ marginLeft: "5%", fontSize: "medium" }}>
        Wrong with self-improvement and how we are fixing it...
      </p>
      {/* main heading */}
      <div style={{ display: "flex" }}>
        <h1
          data-aos="slide-right"
          data-aos-duration="1000"
          className="animateHeading"
          style={{
            marginBottom: 30,
            marginLeft: "5%",
            fontSize: "50px",
          }}
        >
          Self-improvement. Ugh.
        </h1>
        {/* ghost image in main heading */}
        <div
          style={{ width: "40%" }}
          data-aos="slide-left"
          data-aos-duration="1000"
        >
          <img
            src={ghost2}
            className="ghostImage"
            alt="ghost"
            style={{
              marginLeft: "20px",
              width: "120px",
              transform: "rotate(-20deg)",
              height: "120px",
            }}
          ></img>
        </div>
      </div>
      {/* tracker */}
      <div className="someContainer">
        <div className="tracker-container">
          <TrackerStatus
            title="It's not as easy as 1-2-3"
            description="The journey of chage may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
          />
          <TrackerStatus
            title="You and your motivation don't have"
            description="Luckily, we can practively prepare you for the marathan, not
            just the race. Effectively, memoroable exercies will help you
            stick to your goals."
          />
          <TrackerStatus
            title="It's not as easy as 1-2-3"
            description="The journey of chage may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
          />
          <TrackerStatus
            title="You and your motivation don't have"
            description="Luckily, we can practively prepare you for the marathan, not
            just the race. Effectively, memoroable exercies will help you
            stick to your goals."
          />
          <TrackerStatus
            title="It's not as easy as 1-2-3"
            description="The journey of chage may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
          />
          <TrackerStatus
            noline
            title="You and your motivation don't have"
            description="Luckily, we can practively prepare you for the marathan, not
            just the race. Effectively, memoroable exercies will help you
            stick to your goals."
          />
        </div>
      </div>
    </div>
  );
};

export default WrongWith;
