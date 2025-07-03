import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import pfby from '../assets/pfby.jpeg';

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const target = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target === target && entry.isIntersecting) {
            setTimeout(() => setShowSubtitle(true), 200);
            setTimeout(() => setShowTitle(true), 800);
            setTimeout(() => setShowImage(true), 1400);
            setTimeout(() => setShowText(true), 2000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (target) observer.observe(target);
    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <h4 className={`section-subtitle animate-bottom ${showSubtitle ? 'show' : ''}`}>Get To Know</h4>
      <h2 className={`section-title animate-bottom ${showTitle ? 'show' : ''}`}>About Me</h2>

      <div className="about-container">
        <div
          className={`about-image-wrapper animate-shake-left ${showImage ? 'show' : ''}`}
          ref={imageRef}
        >
          <div className="image-background"></div>
          <img src={pfby} alt="About Me" className="about-image back" />
          <img src={pfby} alt="About Me" className="about-image front" />
        </div>

        <div
          className={`about-content animate-right ${showText ? 'show' : ''}`}
          ref={textRef}
        >
          <p>
            🌸 Memiliki ketertarikan besar dalam memahami bagaimana teknologi bekerja di 
            balik layar, serta membangun tampilan website yang interaktif dan estetis. Berfokus 
            pada pengembangan antarmuka pengguna yang responsif, dengan perhatian 
            khusus pada detail dan keindahan desain. 🎀
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://github.com/FebbyWulaansariD" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.instagram.com/febbyd20_?igsh=MXdoanF2cHhqdWNpYw==" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://linkedin.com/in/feby" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>

          {/* Motivational Quote */}
          {/* Motivational Quotes */}
<div className="about-quotes">
  <p><i className="fas fa-heartbeat"></i> Aku belum berada di tempat yang aku inginkan — tapi aku terus berusaha setiap hari.</p>
  <p><i className="fas fa-lightbulb"></i> Setiap ahli dulunya adalah pemula — teruslah membangun.</p>
  <p><i className="fas fa-seedling"></i> Hal-hal hebat butuh waktu. Terus belajar, terus berkembang.</p>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
