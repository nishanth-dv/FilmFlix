import React from "react";
import GPTInput from "./GPTInput";
import GPTSuggestions from "./GPTSuggestions";
import backgroundImage from "../assets/backgroung.jpg";

const GPTComponent = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={backgroundImage} alt="bg-img" />
      </div>
      <GPTInput />
      <GPTSuggestions />
    </div>
  );
};

export default GPTComponent;
