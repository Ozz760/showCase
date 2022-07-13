import React from "react";
import "./Projects.css";
import Card from "react-bootstrap/Card";
import { FaGithub } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
const RR = require("../../images/RR-2022.png");
const TE = require("../../images/TE-2022.png");
const NT = require("../../images/NT-2022.png");

function Projects() {
  const projects = [
    {
      image: RR,
      title: "Recipe-Roulette",
      description:
        "The app will allow you to randomly generate a recipe along with a shopping list tailored to the ingredients needed to make the meal, as well as display an applicable YouTube video.",
      github: "https://github.com/Ozz760/Recipe-Roulette",
      link: "https://kreativekntrl.github.io/project-01/",
    },
    {
      image: TE,
      title: "Text-Editor-IO",
      description:
        "This is an application that allows users to code to their browsers and have their code automatically save and reloaded when the user leaves the app.",
      github: "https://github.com/Ozz760/Text-Editor-io",
      link: "https://murmuring-depths-08823.herokuapp.com/",
    },
    {
      image: NT,
      title: "Note-Taker",
      description:
        "This application allows the user to input notes in a given prompt.",
      github: "https://github.com/Ozz760/Note-Taker-Express.js",
      link: "https://lit-cliffs-22896.herokuapp.com/",
    },
  ];
  const renderProjects = (projects, index) => {
    return (
      <div>
        <Card style={{ width: "25rem" }} className="box">
          <Card.Img variant="top" src={projects.image} />
          <Card.Body>
            <Card.Title>{projects.title}</Card.Title>
            <Card.Text>{projects.description}</Card.Text>
          </Card.Body>
          <div className="icons">
            <a href={projects.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href={projects.link} target="_blank" rel="noreferrer">
              <FaJs />
            </a>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <h1>Projects</h1>
      {projects.map(renderProjects)}
    </div>
  );
}

export default Projects;
