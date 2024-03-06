import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//My Components 
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact';
import Nav from './components/Nav';
import Container from './components/Container'
import Footer from './components/Footer';


function App() {


return (
<Router>
    <div>
      <Nav />
      <Container className="wrapper">
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Container>
      <Footer />
    </div>
  </Router>
);

}

export default App
