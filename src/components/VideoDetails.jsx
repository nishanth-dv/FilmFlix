import React, { useState } from "react";

const VideoDetails = ({ title, overview }) => {
  const [toggleOverview, setToggleOverview] = useState(false);

  return (
    <div className="absolute top-[60%] left-[10%] text-white w-1/2 drop-shadow-2xlxl">
      <h1 className="text-6xl font-bold pb-10">{title}</h1>
      <p className={toggleOverview ? "visible pb-10" : "invisible pb-10"}>{overview}</p>
      <button className="py-2 px-6 bg-white text-black font-bold rounded-lg text-md mr-6 bg-opacity-50 hover:bg-opacity-90">
        <i className="fa-solid fa-play mr-2" />
        Play
      </button>
      <button
        className="py-2 px-6 bg-slate-900 text-white font-lg rounded-lg text-md bg-opacity-70 hover:bg-opacity-90"
        onClick={() => {
          setToggleOverview(!toggleOverview);
        }}
      >
        <i className="fa-solid fa-circle-info mr-2 font-light" />
        Overview
      </button>
    </div>
  );
};

export default VideoDetails;
