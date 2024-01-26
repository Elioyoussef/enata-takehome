import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import JobDetails from "./JobDetails";
import "./index.css";
import ThankYou from "./ThankYou";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-[100vh] max-w-[1920px] mx-auto bg-[#212020] overflow-x-hidden">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/thankyou" element={<ThankYou />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
