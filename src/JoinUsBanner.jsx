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
    <div>
      <h1 className="lg:text-5xl text-2xl md:text-center font-thin max-w-[260px] sm:mx-auto text-white lg:pt-12">
        Work with us
      </h1>
      <Lottie options={defaultOptions} height={300} width={300} className=""/>
    </div>
  );
};

export default JoinUsBanner;
