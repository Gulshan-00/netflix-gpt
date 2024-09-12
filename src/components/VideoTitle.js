import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black aspect-video opacity-85">
      <h1 className="text-5xl font-extrabold">{title}</h1>
      <p className="w-4/12 py-4">{description}</p>
      <div className="">
        <button className="p-2 px-10 rounded-md text-lg bg-white text-black hover:bg-opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 p-2 px-10 rounded-md text-lg bg-gray-500">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
