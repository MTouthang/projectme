import React from "react";
import Header from "./components/Header";
import SideBars from "./components/SideBars";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div>
      <Header />
      <SideBars />
      <HeroSection />
      <AboutMe />
    </div>
  );
}

export default App;
