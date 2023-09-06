import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      {/* logo of the app */}
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img src={logo} style={{ width: "50px",marginLeft:'20px' }} alt="logo" />
        {/* header options */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-5 hover:text-gray-900">
            Emotions
          </a>
          <a href="/" className="mr-5 hover:text-gray-900">
            Manifesto
          </a>
          <a href="/" className="mr-5 hover:text-gray-900">
            Self-awareness test
          </a>
          <a href="/" className="mr-5 hover:text-gray-900">
            Work With Us
          </a>
        </nav>
        {/* download app button */}
        <button className="bg-black text-white rounded-full py-2 px-4">
          Download app
        </button>
      </div>
    </header>
  );
};

export default Navbar;
