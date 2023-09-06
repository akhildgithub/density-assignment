import React from "react";
import { Icon } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../assets/images/logo.png";
import "../index.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* logo and name of ahead app */}
      <img src={logo} alt="logo" style={{ width: "50px", margin: "auto" }} />
      <h1 style={{ fontSize: "30px", textAlign: "center" }}>Ahead</h1>
      <br />
      <br />
      {/* location and mail container in footer */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "auto",
          justifyContent: "space-around",
          width: "40%",
        }}
      >
        <div>
          {" "}
          <Icon
            component={LocationOnIcon}
            sx={{ fontSize: 30, color: "black" }}
          />{" "}
          aheadApp, location
        </div>
        <div>
          {" "}
          <Icon
            component={EmailIcon}
            sx={{ fontSize: 30, color: "black" }}
          />{" "}
          hi@ahead-app.com
        </div>
      </div>
      <br />
      {/* download App Store container */}
      <div className="container">
        <div className="logo">
          <AppleIcon sx={{ fontSize: "35px" }} />
        </div>
        <div className="info">
          <p className="small-text">Download on the</p>
          <p className="big-text">App Store</p>
        </div>
      </div>
      <br />
      <br />
      {/* copyrights reserved */}
      <p style={{ margin: "auto" }}>
        &copy; 2022 Ahead app, All rights reserved
      </p>
      <br />
    </div>
  );
};

export default Footer;
