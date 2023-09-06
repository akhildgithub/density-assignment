import React from "react";

const EqBeatsIQ = ({ first, second, third }) => {
  return (
    <section
      className="text-gray-600 body-font"
      style={{ marginTop: `${first === "EQ beats" ? "550px" : "30px"}` }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <p className="leading-relaxed text-base eqPara ">{first}</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <p className="leading-relaxed text-base">{second}</p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex">
            <div className="flex-grow pl-6">
              <p className="leading-relaxed text-base">{third}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EqBeatsIQ;
