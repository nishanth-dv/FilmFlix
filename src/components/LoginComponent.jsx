import React from "react";
import backgroundImage from "../assets/backgroung.jpg";
import HeaderComponent from "./HeaderComponent";
import LoginSignupComponent from "./LoginSignupComponent";

const LoginComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <div>
        <img src={backgroundImage} alt="bg-img" />
      </div>
      <LoginSignupComponent />
    </div>
  );
};

export default LoginComponent;
