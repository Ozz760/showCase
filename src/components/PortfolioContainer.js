import React from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Header from "./pages/Header/Header";

function PortfolioContainer() {
    return (
      <div>
        <NavTabs />
        <Header />
        <br />
        <AboutMe />
        <br />
        <Projects />
        <br />
        <Contact />
      </div>
    );
}

export default PortfolioContainer;
