import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//My Components 
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact';
import Navbar from './components/Navbar';



function App() {


return (
<Router>
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
  </Router>
);

}

export default App
