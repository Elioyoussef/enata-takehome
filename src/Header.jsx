import React from "react";
import "./index.css";
import logo from "./assets/enata-white.svg";

const Header = () => {
  return (
    <div className="w-full py-4 bg-[#212020] max-w-[1920px] mx-auto border-b-2 border-[#fff] border-opacity-50 border-dashed">
      <div className="flex justify-center align-middle max-w-[120px] m-auto">
        <a href="https://enata.com" className="">
          <img src={logo} alt="" className="block w-full" />
        </a>
      </div>
    </div>
  );
};

export default Header;
