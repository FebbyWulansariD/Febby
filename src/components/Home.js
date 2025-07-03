import React, { useEffect, useRef } from 'react';
import './Home.css';
import pfby from '../assets/pfby.jpeg';

const Skills = () => {
  const typeRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeRef.current) {
        typeRef.current.classList.add('start-type');
      }
    }, 1600); // Delay sesuai animasi sebelumnya
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">Portofolio<span className="dot">.</span></div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#toolsframeworks">ToolsFrameworks</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-container">
          <div className="home-text">
            <h1>Hello, It's Me</h1>
            <h2>Febby Wulansari</h2>
            <h3>
              And I'm <span ref={typeRef} className="highlight typewriter">an Informatics Student 💻</span>
            </h3>
            <p>
              Tertarik pada bagaimana ide sederhana bisa tumbuh menjadi aplikasi atau website interaktif. Fokus utama adalah menciptakan antarmuka yang tidak hanya berfungsi, tetapi juga menyenangkan secara visual.🌼 🌷 
            </p>
          </div>
          <div className="home-image">
            <div className="glow-circle">
              <img src={pfby} alt="Profile" className="profile-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
