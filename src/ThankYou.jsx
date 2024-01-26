import React from "react";
import Lottie from "react-lottie";
import sucess from "../src/assets/sucess.json";

const ThankYou = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    animationData: sucess,
  };
  return (
    <div className="max-w-[1920px] mx-auto flex flex-col align-middle pt-20">
      <div>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
      <p className="text-[#fff] text-center text-2xl px-4">
        Thank you for applying! Our team will contact you soon. Meanwhile please
        take on a look on our{" "}
        <a href="https://enata.com" className="text-teal-500">
          website
        </a>
      </p>
    </div>
  );
};

export default ThankYou;
