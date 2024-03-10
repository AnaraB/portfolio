import React from "react";
import {
  frontEndSkills,
  backEndSkills,
  additionalSkills,
} from "../../../assets/data/projectData";
import Container from "../../Container";

function Skills(props) {
  
  const frontEndList = frontEndSkills.map((skill) => <li>{skill}</li>);
  const backEndList = backEndSkills.map((skill) => <li>{skill}</li>);
  const otherProficiencies = additionalSkills.map((skill) => <li>{skill}</li>);

  return (
    <Container>
    <section className="skillsSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto mb-4">
            <p>I started out in customer
              service, but I've since graduated from the Junior Full Stack
              Developer program at IT Career Switch. Right now, I'm leveling up
              my coding skills at Skills Bootcamp's Front-End Web Development
              course on edX Boot Camp. </p>
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
    </Container>
  );
}

export default Skills;
