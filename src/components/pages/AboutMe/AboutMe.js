import React from "react";
import "./AboutMe.css";
const profile = require("../../images/IMG_1510.jpg");  

function AboutMe() {
  return (
    <div>
      <h1 className="aboutme-title">About Me</h1>
      <p className="first-par">
        Hello, my name is Oscar Silva, and I am a Full Stack Developer and I
        enjoy figuring out how to make something work. My journey for web
        development started back in December of 2021, when I first took my
        coding class, I've been hooked ever since.
      </p>
      <p className="second-par">
        Today I am sharpening my skills as a Full Stack Developer, and working
        on some awesome projects that I proud of. On the side I am teaching
        myself Java and frameworks like SpringBoot. 
      </p>
      <img src={profile} alt="Picture of Oscar Silva" className="img0" />
      <p className="list-par">
        Here are some technologies I am currently working with:
      </p>
      <ul className="list-skills">
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>React</li>
        <li>NodeJS</li>
        <li>Java</li>
        <li>MongoDB</li>
        <li>SpringBoot</li>
      </ul>
    </div>
  );
}

export default AboutMe;
