import React from "react";
import {
  frontEndSkills,
  backEndSkills,
  additionalSkills,
} from "../../../assets/projectData";

function Skills() {
  const frontEndList = frontEndSkills.map((skill) => <li>{skill}</li>);
  const backEndList = backEndSkills.map((skill) => <li>{skill}</li>);
  const otherProficiencies = additionalSkills.map((skill) => <li>{skill}</li>);

  return (
    <section className="bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-white mb-4">
            <h1 className="text-center">Curriculum Vitae</h1>
            <hr className="light my-4" />
            <h3 className="text-center">Front end skills</h3>
            <ul>{frontEndList}</ul>
            <h3 className="text-center">Back end skills</h3>
            <ul>{backEndList}</ul>
            <h3 className="text-center">Additional Skills</h3>
            <ul>{otherProficiencies}</ul>
            {/* <p className="text-center">
       Download my <a href={Pdf} className="text-faded white-link" download>CV</a>
       </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
