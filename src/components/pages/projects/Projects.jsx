import React from "react";
import projectData from "../../../assets/projectData";
import ProjectItem from "../../ProjectItem";
import './projects.css' 

function Projects() {
  return (
    <div>
      <p>Projects cards</p>
      {projectData.map((project) => {
        return <ProjectItem projectInfo={project} />;
      })}
    </div>
  );
}

export default Projects;
