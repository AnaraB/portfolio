import React from "react"

function ProjectItem({projectInfo}) {
 
  const {id, title, description, deployedUrl, githubUrl, image} = projectInfo;
  return (

    <div className="col-lg-4  col-sm-6">
      <div className="project-card" key={projectInfo.id}>
        <img  src={projectInfo.image} alt={projectInfo.title} className="img-fluid"/>
        <div className="project-card-caption">
          <div className="project-card-caption-content">
            <a href={projectInfo.githubUrl} className="project-line text-faded" target="_blank">	<i className="fab fa-github"></i></a>
            <br />
            <a href={projectInfo.deployedUrl} className="project-line text-faded" target="_blank"><i className="fas fa-link"></i></a>
            <p className="project-description-tools">{projectInfo.description}</p>

          </div>

        </div>

      </div>

    </div>
    // <div>
    //   <p>Project image and descrirpiton</p>
    //   <div className = "projectImage" style={{backgroundImage:`url(${projectInfo.image})`}}>
    //   <p className= "">Description info</p>

    //   </div>
    // </div>
  )
  
}

export default ProjectItem