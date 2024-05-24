import React from 'react';
import './styles.css';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Portfolio />
      <Clients />
      <Contact />
    </div>
  );
}

export default App;