import React from "react";
import { v4 as uuid} from 'uuid';
import {
  frontEndSkills,
  backEndSkills,
  additionalSkills, 
  icons
} from "../../../assets/data/projectData";
import Container from "../../Container";

function Skills() {
  const frontEndList = frontEndSkills.map((skill) => <li key={uuid()}>{skill}</li>);
  const backEndList = backEndSkills.map((skill) => <li key={uuid()}>{skill}</li>);
  const otherProficiencies = additionalSkills.map((skill) => <li key={uuid()}>{skill}</li>);

  return (
    <Container>
      <section className="skillsSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto mb-4">
              <h2>Skills</h2>
              <p>
                I started out in customer service, but I've since graduated from
                the Junior Full Stack Developer program at IT Career Switch.
                Right now, I'm leveling up my coding skills at Skills Bootcamp's
                Front-End Web Development course on edX Boot Camp. I am a
                dynamic professional with a diverse background in finance,
                childcare, entrepreneurship, and sales. Leveraging my
                experiences in these fields, I am currently transitioning into
                the exciting world of web development, focusing on front-end
                technologies. With a strong foundation in various industries and
                a passion for learning and innovation, I am eager to contribute
                my diverse skill set to the ever-evolving field of web
                development.
              </p>
              <h3>Front end skills</h3>
              <ul className="listInlne">{frontEndList}</ul>
              <h3>Back end skills</h3>
              <ul className="listInlne">{backEndList}</ul>
              <h3>Additional Skills</h3>
              <ul className="listInlne">{otherProficiencies}</ul>
            </div>
          </div>
          <div className="row">
                    <div className="col-lg-8 mx-auto d-flex justify-content-between contactMeIcons">
                        {icons.map(icon =>
                            (
                                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
                            )
                        )}
                    </div>
                         {/* <p className="text-center">
       Download my <a href={Pdf} className="text-faded white-link" download>CV</a>
       </p> */}
            </div>
        </div>
      </section>
    </Container>
  );
}

export default Skills;
