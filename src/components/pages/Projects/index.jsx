import React from "react";
import projectData from "../../../assets/data/projectData";
import ProjectItem from "../../ProjectItem";
import Container from "../../Container";


function Projects() {
  return (
    <Container>
    <section className="projects-section">
    <div className="container-fluid">
      <h1>Projects</h1>
      <div className="row">
      {projectData.map((project) => {
        return <ProjectItem projectInfo={project} key={project.id}/>;
      })}

      </div>
     
    </div>
    </section>
    </Container>
  );
}

export default Projects;
