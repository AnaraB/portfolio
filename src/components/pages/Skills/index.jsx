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
              <h2 className="sectionTitle mb-3">Skills</h2>
              <p>
                I started off in customer service, but then I got into the
                Junior Full Stack Developer program at IT Career Switch. Right
                now, I'm digging deeper into coding with Skills Bootcamp's
                Front-End Web Development course on edX Boot Camp. I've done a
                bit of everything - finance, childcare, entrepreneurship, and
                sales - which gives me a bunch of skills to bring to the table
                in web development, especially on the front-end side. I'm all
                about learning and trying new things, so I'm pumped to jump into
                the constantly changing world of web development and put my mix
                of skills to good use! <br />
                Here is the list of my milestones. Download my CV for more information. 
              </p>
              <h3>Coding Languages</h3>
              <ul className="listInlne">{codingLanguagesList}</ul>
              <h3>Libraries and Frameworks</h3>
              <ul className="listInlne">{libAndFrameList}</ul>
              <h3>Collaboration Tools</h3>
              <ul className="listInlne">{collabTools}</ul>
              <h3>Additional Tools</h3>
              <ul className="listInlne">{otherProficiencies}</ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto d-flex justify-content-between socialIcons">
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
