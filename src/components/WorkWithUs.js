import React from "react";
import "../index.css";
import CardWrapper from "../reUseableComponents/CardWrapper";

const WorkWithUs = () => {
  return (
    <div className="workWithUsDiv">
      {/* header of the component */}
      <header>
        {/* left heading */}
        <h1 data-aos="slide-right" data-aos-duration="1000">
          Work with us
        </h1>
        {/* right heading */}
        <h1
          data-aos="slide-left"
          data-aos-duration="1000"
          style={{ color: "DarkViolet" }}
        >
          ahead
        </h1>
      </header>
      {/* cards container */}
      <div className="cardsContainer">
        {/* left side cards */}
        <div className="firstCards">
          <CardWrapper
            body1Variant="body1"
            width={320}
            title="About"
            description="At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what ahead it about!"
          />
          <CardWrapper
            width={320}
            body1Variant="body1"
            title="Product"
            description="Sure you could spend ages reading books are sitting in semionors on how to become a better spouse, parent otr manager - like we did ..."
          />
        </div>
        {/* right side cards */}
        <div className="secondCards scroll-container">
          <CardWrapper
            width={350}
            title="Power through, even when going gets tough"
            description="We help you spot and work around whatever stands in way, be it bad habits, fear etc."
          />
          <CardWrapper
            width={350}
            title="You attend a class reunion"
            description="You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others."
          />
          <CardWrapper
            width={350}
            title="You attend a class reunion"
            description="You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others."
          />
          <CardWrapper
            width={350}
            title="You attend a class reunion"
            description="You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others."
          />
          <CardWrapper
            width={350}
            title="You attend a class reunion"
            description="You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others."
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
