import React from "react";

const VideoDetails = ({ title, overview }) => {
  return (
    <div className="absolute text-center top-[25%] left-[5%] text-white w-1/3 drop-shadow-2xl md:top-[30%] md:text-start">
      <h1 className="text-xl font-semibold pb-1 md:pb-10 md:text-6xl md:font-bold">
        {title}
      </h1>
      <p className="hidden pb-10 md:inline-block">{overview}</p>
      <button className="py-1 px-6 bg-white text-black font-bold rounded-full text-xs mr-6 bg-opacity-50 hover:bg-opacity-90 md:rounded-lg md:text-md md:py-[11px]">
        <i className="fa-solid fa-play md:mr-2" />
        <span className="hidden md:inline-block">Play</span>
      </button>
      <button className="hidden py-2 px-6 bg-slate-900 text-white font-lg rounded-lg text-md bg-opacity-70 hover:bg-opacity-90 md:inline-block">
        <i className="fa-solid fa-circle-info mr-2 font-light" />
        Overview
      </button>
    </div>
  );
};

export default VideoDetails;
