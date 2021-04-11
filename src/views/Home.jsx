import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className='site'>
      <Navbar />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
