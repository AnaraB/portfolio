import React, {useState} from "react"
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";

function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
       <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {currentPage === "Home" &&  <Home />}
      {currentPage === "About" && <AboutMe />}
      {currentPage === "Projects" &&  <Projects />}
      {currentPage === "Contact" &&  <Contact />}
        
    </div>
  )
}

export default Container