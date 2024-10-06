import React from "react";
import GPTInput from "./GPTInput";
import GPTSuggestions from "./GPTSuggestions";
import backgroundImage from "../assets/backgroung.jpg";

const GPTComponent = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" src={backgroundImage} alt="bg-img" />
      </div>
      <div>
        <GPTInput />
        <GPTSuggestions />
      </div>
    </>
  );
};

export default GPTComponent;
