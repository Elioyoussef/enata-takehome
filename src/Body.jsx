import React from "react";
import "./index.css";
import JoinUsBanner from "./JoinUsBanner";
import JobListingContainer from "./JobListingContainer";

const Body = () => {
  return (
    <div className="lg:pt-28 lg:px-20 lg:flex-row lg:justify-between flex flex-col justify-center px-4 text-gray-400 h-[100vh] pt-6">
      <JoinUsBanner />
      <div className="lg:text-2xl font-thin">
        <p className="text-grey-500">Hey! We're hiring!</p>
        <p>The following positions are currently available</p>
        <p>Click on Apply Now to see the job offer</p>
        <JobListingContainer />
      </div>
    </div>
  );
};

export default Body;
