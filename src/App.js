import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import ToolsFrameworks from './components/ToolsFrameworks'; 
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
// kalau ada

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <ToolsFrameworks/>
      <Gallery />
      <Contact />
      <Footer /> {/* kalau kamu sudah buat */}
    </div>
  );
}

export default App;
