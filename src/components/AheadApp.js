import React from "react";
import "../index.css";
import AppleIcon from "@mui/icons-material/Apple";
import { Card, Typography } from "@mui/material";
import first2 from "../assets/images/first2.png";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import Battery4BarIcon from "@mui/icons-material/Battery4Bar";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import TodayIcon from "@mui/icons-material/Today";
import AssistantIcon from "@mui/icons-material/Assistant";

const AheadApp = () => {

  return (
    // main div is a row which conatins two columns
    <div
      className="mainDiv"
      style={{
        height: "550px",
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* first column of aheadApp row */}
      <div className="aheadFirstCol" style={{ margin: "20vh 1%" }}>
        <p className="aheadP">Ahead App</p>
        <h1 className="aheadH1">Master your life by mastering emotions</h1>

        {/* download Appstore button */}
        <div className="container">
          <div className="logo">
            <AppleIcon sx={{ fontSize: "35px" }} />
          </div>
          <div className="info">
            <p className="small-text">Download on the</p>
            <p className="big-text">App Store</p>
          </div>
        </div>
      </div>

      {/* secoond column for aheadApp row */}
      <div className="aheadSecondCol">

        {/* phone structure in second column of aheadApp row */}
        <div className="phone-border">
          {/* phone notification bar */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <pre> 12:24</pre>
            <div>
              <NetworkWifiIcon />
              <Battery4BarIcon />
            </div>
          </div>
          {/* card inside phone */}
          <Card className="doesThisCard" sx={{ width: 160, height: 200 }}>
            <img src={first2} style={{ height: "100px" }} alt="emotion2" />
            <Typography variant="body1" sx={{ padding: 1 }}>
              Can you get yourself out of anger and think clearly again?
            </Typography>
          </Card>
          {/* phone below options */}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <TodayIcon sx={{ fontSize: "35px" }} />
            <ControlPointIcon sx={{ fontSize: "35px" }} />
            <AssistantIcon sx={{ fontSize: "35px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AheadApp;
