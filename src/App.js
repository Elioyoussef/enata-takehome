import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import JobDetails from './JobDetails';
import "./index.css";

function App() {
  return (
    <Router>
      <div className="max-w-[1920px] mx-auto bg-[#212020] h-[100vh] overflow-x-hidden">
        <Header />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;