import React from 'react'
import Lottie from "react-lottie";
import animation from "../src/assets/plane.json";
import "./index.css";

const JoinUsBanner = () => {
    // in order to control the lottie animation
    const defaultOptions = {
        loop: true,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        },
        animationData: animation
    };
  return (
    <div>
        <h1 className="text-5xl font-thin max-w-[260px] mx-auto text-white">/Work with us</h1>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
  )
}

export default JoinUsBanner
