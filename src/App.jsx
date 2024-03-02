import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/pages/home/Home";
import About from "./components/pages/aboutMe/AboutMe";
import Projects from "./components/pages/projects/Projects";
import Contact from "./components/pages/contact/Contact";
import './App.css'


function App() {

  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />      
      </Routes>

    </Router>
  )
}

export default App
