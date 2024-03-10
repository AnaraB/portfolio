import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="text-center d-flex" id="heroSection">
      <div className="container-fluid hero-container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="circle-img"></div>
            <h3>Aygerim Berdalieva</h3>
            <p>
              Hey, I'm a Junior Web Developer who loves creating user-friendly web
              applications. <br />
              Becoming a web developer is like climbing the mountains. After
              climbing a great hill, one only finds that there are many more
              hills to climb. I love tackling problems and coming up with cool
              new ideas and creating apps that prioritize mobile users. By
              combining my transferrable skills from my past experiences with my
              ongoing education, I'm ready to take on any challenge and thrive
              in a fast-paced, always-changing tech environment. <br /> Let's build
              something awesome together!
            </p>
          </div>
        </div>
        <Link to="/contact" className="orangeBtn">
          Contact me
        </Link>
      </div>
    </div>
  );
}

export default About;
