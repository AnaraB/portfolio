import React from "react"

function ProjectItem({projectInfo}) {
 
  return (
    <div>
      <p>Project image and descrirpiton</p>
      <div className = "projectImage" style={{backgroundImage:`url(${projectInfo.image})`}}>
      <p className= "">Description info</p>

      </div>
    </div>
  )
  
}

export default ProjectItem