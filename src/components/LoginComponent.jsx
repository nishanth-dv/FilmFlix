import React from "react";
import backgroundImage from "../assets/backgroung.jpg";
import HeaderComponent from "./HeaderComponent";

const LoginComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <img src={backgroundImage} alt="bg-img" />
      </div>
    </div>
  );
};

export default LoginComponent;
