import React from "react";
import projectData from "../../../assets/data/projectData";
import ProjectItem from "../../ProjectItem";


function Projects() {
  return (
    <section className="projects-section">
    <div className="container-fluid">
      <h1>My Projects</h1>
      <div className="row no-gutters">
      {projectData.map((project) => {
        return <ProjectItem projectInfo={project} key={project.id}/>;
      })}

      </div>
     
    </div>
    </section>
  );
}

export default Projects;
