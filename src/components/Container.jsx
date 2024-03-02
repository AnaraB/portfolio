import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/home/Home";
import About from "./pages/aboutMe/AboutMe";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import AboutMe from "./pages/aboutMe/AboutMe";



function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === "Home" && <Home />}
      {currentPage === "About" && <AboutMe />}
      {currentPage === "Projects" && <Projects />}
      {currentPage === "Contact" && <Contact />}
    </div>
  );
}

export default Container;
