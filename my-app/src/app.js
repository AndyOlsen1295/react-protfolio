import React from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Resume from './components/Resume.js';
import myResume from './assets/my_resume.pdf';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Resume resumePDF={myResume} />
    </div>
  );
}

export default App;

