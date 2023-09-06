import * as React from "react";
import "../index.css";
import CardWrapper from "../reUseableComponents/CardWrapper";
import ghost from "../assets/images/ghost4.png";

export default function DoesThis() {
  return (
    <>
      {/* header row */}
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
          Does this sound familiar...
        </h1>
        {/* ghost floating image */}
        <div
          data-aos="slide-left"
          data-aos-duration="1000"
          style={{ width: "40%" }}
        >
          <img
            src={ghost}
            className="ghostImage"
            alt="ghost"
            style={{
              marginLeft: "20px",
              width: "60px",
              transform: "rotate(-20deg)",
              height: "80px",
            }}
          ></img>
        </div>
      </div>
      <div
        className="doesThis"
        data-aos="slide-left"
        data-aos-duration="1000"
        style={{ display: "flex", overflowY: "scroll" }}
      >
        {/* cards row */}
        <CardWrapper
          color="rgba(255, 99, 71, 0.2)"
          emoji="angry"
          title="You argue with a colleage"
          description="You get angry and defensive, instead of staying open and working towards common ground."
        />
        <CardWrapper
          emoji="shock"
          color="#e4e4f4"
          title="You get a promotion at work"
          description="You question yourself and wonder when they'll reqlize you're an unqualified imposter, intead  trusting yourself & your abilites. "
        />
        <CardWrapper
          color="#8f26bc"
          emoji="eyeUp"
          title="You attend a class reunion"
          description="You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others."
        />
        <CardWrapper
          color="#f9e3ba"
          emoji="sad"
          title="You are at a lovely dinner party"
          description="You play on your phone instead of reaching out with others, confidently speaking with others."
        />
        <CardWrapper
          color="#f6ebd6"
          emoji="disgusted"
          title="You attend a class reunion"
          description="You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others."
        />
      </div>
    </>
  );
}
