import React from "react";
import logo from "../assets/logo.png";

const HeaderComponent = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full">
      <img className="w-48 radiant" src={logo} alt="logo" />
    </div>
  );
};

export default HeaderComponent;
