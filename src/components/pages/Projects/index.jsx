import React from "react";
import projectData from "../../../assets/data/projectData";
import ProjectItem from "../../ProjectItem";
import Container from "../../Container";
import { v4 as uuid} from 'uuid';


function Projects() {
  return (
    <Container>
    <section className="projectsSection">
    <div className="container-fluid">
      <h2>Projects</h2>
      <div className="row">
      {projectData.map((project) => {
        return <ProjectItem projectInfo={project} key={uuid()}/>;
      })}

      </div>
     
    </div>
    </section>
    </Container>
  );
}

export default Projects;
