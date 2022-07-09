import React from "react";
import AboutMe from "./pages/AboutMe";
import NavTabs from "./NavTabs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function PortfolioContainer() {
    return (
      <div>
        <NavTabs />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    );
}

export default PortfolioContainer;
