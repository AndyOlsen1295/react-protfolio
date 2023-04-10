import React from 'react';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Resume from './components/resume';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
