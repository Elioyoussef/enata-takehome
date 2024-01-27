import React from "react";
import Lottie from "react-lottie";
import animation from "../src/assets/plane.json";
import "./index.css";

const JoinUsBanner = () => {
  // in order to control the lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: animation,
  };
  return (
    <div className="max-w-[300px]">
      <h1 className="lg:text-5xl text-2xl md:text-center font-thin max-w-[260px] lg:mx-auto text-white sm:pb-7">
        Work with us
      </h1>
      <div className="sm:hidden">
         <Lottie options={defaultOptions}/>
      </div>
    </div>
  );
};

export default JoinUsBanner;
