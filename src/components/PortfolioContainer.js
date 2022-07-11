import React from "react";
import AboutMe from "./pages/AboutMe/AboutMe";
import NavTabs from "./NavTabs";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Header from "./pages/Header/Header";

function PortfolioContainer() {
    return (
      <div>
        <NavTabs />
        <Header />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    );
}

export default PortfolioContainer;
