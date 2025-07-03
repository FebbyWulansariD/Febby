import React, { useEffect } from 'react';
import './ToolsFrameworks.css';
import HTMLCSS1 from '../assets/HTMLCSS1.png';
import JS from '../assets/JS.jpg';
import REACT1 from '../assets/REACT1.png';
import FIGMA1 from '../assets/FIGMA1.png';
import LARAVEL from '../assets/LARAVEL.png';
import YII1 from '../assets/YII1.png';

const Skills = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(elements).indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.2}s`;
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <section id="toolsframeworks" className="skills-section">
      <h4 className="section-subtitle animate-up">My Learning Journey</h4>
      <h2 className="section-title animate-up">What I'm Learning</h2>

      <div className="skills-container">
        <div className="skill-card animate-up">
          <img src={HTMLCSS1} alt="HTML & CSS" className="skill-icon" />
          <h3>HTML & CSS</h3>
          <p>Dasar-dasar pembuatan halaman web dan styling dengan CSS.</p>
        </div>
        <div className="skill-card animate-up">
          <img src={JS} alt="JavaScript" className="skill-icon" />
          <h3>JavaScript</h3>
          <p>Logika pemrograman dasar dan membuat halaman web lebih interaktif.</p>
        </div>
        <div className="skill-card animate-up">
          <img src={REACT1} alt="React" className="skill-icon" />
          <h3>React</h3>
          <p>Belajar membuat UI modern dan component-based.</p>
        </div>
        <div className="skill-card animate-up">
          <img src={FIGMA1} alt="Figma" className="skill-icon" />
          <h3>Figma</h3>
          <p>Belajar mendesain tampilan UI/UX dengan prototipe.</p>
        </div>
        <div className="skill-card animate-up">
          <img src={LARAVEL} alt="Laravel" className="skill-icon" />
          <h3>Laravel</h3>
          <p>Belajar backend saat PKL: routing, controller, dan template blade.</p>
        </div>
        <div className="skill-card animate-up">
          <img src={YII1} alt="Yii" className="skill-icon" />
          <h3>Yii Framework</h3>
          <p>Framework lain yang dipakai saat PKL: CRUD dan MVC pattern.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
