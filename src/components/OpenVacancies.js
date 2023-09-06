import React from "react";
import "../index.css";
import CardWrapper from "../reUseableComponents/CardWrapper";

const OpenVacancies = () => {
  return (
    <div className="openVacancies">
      {/* header of the component */}
      <header>
        <h1 data-aos="slide-right" data-aos-duration="1000">
          Open vacancies
        </h1>
      </header>
      {/* cards container */}
      <div
        className="cards"
        style={{ display: "flex", flexDirection: "row", marginBottom: "100px" }}
      >
        <CardWrapper
        openVacancies
        openVacanciesOrder={1}
          title="What everone is thinking"
          description="You get angry and defensive, instead of staying open and working towards common ground. something else to be added."
          width={275}
        />
        <CardWrapper
        openVacancies
        openVacanciesOrder={2}
          title="How to behave good"
          description="You get angry and defensive, instead of staying open and working towards common ground. something else to be added."
          width={275}
        />
        <CardWrapper
        openVacancies
        openVacanciesOrder={3}
          title="You are really awesome"
          description="You get angry and defensive, instead of staying open and working towards common ground. something else to be added."
          width={275}
        />
      </div>
      <hr
        style={{
          width: "100vw",
          marginBottom: "50px",
          border: "1px solid black",
          marginLeft: "-5vw",
        }}
      />
    </div>
  );
};

export default OpenVacancies;
