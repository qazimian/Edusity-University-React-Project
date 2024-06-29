import React from "react";
import Navbar from "../src/components/Navbar/navbar";
import Home from "./components/Home/Home";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="container">
        <Title subTitle='Our PROGRAMS' Title='What We Offer' />
        <Programs />
        <About/>
        <Title subTitle='Gallery' Title='Campus Photos' />
        <Campus/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  );
};

export default App;
