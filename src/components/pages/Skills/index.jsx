import React from "react";
import { v4 as uuid } from "uuid";
import {
  codingLanguages,
  librariesAndFrameworks,
  additionalSkills,
  collaborationTools,
} from "../../../assets/data/projectData";
import cv from "../../../assets/images/cv.pdf";
import cvIcon from "../../../assets/images/icons/cv.png";
import gitHubIcon from "../../../assets/images/icons/github.png";
import linkedinIcon from "../../../assets/images/icons/linkedin.png";
import Container from "../../Container";

function Skills() {
  const codingLanguagesList = codingLanguages.map((skill) => (
    <li className="skill-items" key={uuid()}>
      {skill}
    </li>
  ));
  const libAndFrameList = librariesAndFrameworks.map((skill) => (
    <li className="skill-items" key={uuid()}>
      {skill}
    </li>
  ));
  const otherProficiencies = additionalSkills.map((skill) => (
    <li className="skill-items" key={uuid()}>
      {skill}
    </li>
  ));
  const collabTools = collaborationTools.map((skill) => (
    <li className="skill-items" key={uuid()}>
      {skill}
    </li>
  ));

  return (
    <Container>
      <section className="skillsSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto mb-4">
              <h2 className="sectionTitle mb-2">Skills</h2>
              <p>
                Following a couple of coding tutorials, I was hooked and
                enrolled in the Full Stack Developer program at IT Career
                Switch, where I created two full-stack projects: Gazetteer and
                Company Directory. <br />  I love learning and trying new things. I am
                leveraging my past experiences in customer service, finance,
                childcare, entrepreneurship, and sales - which equip me with a
                plethora of skills to contribute to web development,
                particularly on the front-end side. Upon successfully completing
                the Front-End Web Development Bootcamp on edX Boot Camp, I'm
                excited to share my journey. <br /> Please refer to the list of
                milestones provided below and feel free to download my CV for
                comprehensive information.
              </p>
              <h3>Coding Languages</h3>
              <ul className="listInline">{codingLanguagesList}</ul>
              <h3>Libraries and Frameworks</h3>
              <ul className="listInline">{libAndFrameList}</ul>
              <h3>Collaboration Tools</h3>
              <ul className="listInline">{collabTools}</ul>
              <h3>Additional Tools</h3>
              <ul className="listInline">{otherProficiencies}</ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto d-flex justify-content-between socialIcons">
              {/* <hr className="" /> */}
              <a href={cv} target="_blank" rel="noopener noreferrer">
                <img src={cvIcon} alt="cv icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/aygerim-berdalieva/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="linkedin icon" />
              </a>
              <a
                href="https://github.com/AnaraB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={gitHubIcon} alt="gitHub icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Skills;
