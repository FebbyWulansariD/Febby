import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
  const footer = document.querySelector('.footer-girly');

  const createHeart = () => {
    const heart = document.createElement('span');
    heart.classList.add('heart-bubble');
    heart.innerHTML = '💖';

    // Posisi random
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = 3 + Math.random() * 2 + 's';

    footer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  };

  const interval = setInterval(createHeart, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <footer className="footer-girly">
      <div className="footer-girly-content">
        <div className="footer-info">
          <h2 className="brand">Febby Design</h2>
          <p className="tagline">Crafting beauty through code & design ✨</p>
        </div>

        <div className="footer-social">
          <p>Let's Connect!</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-girly-bottom">
        <p>© 2025 Febby Design | Built with 💕 and 💻</p>
      </div>
    </footer>
  );
};

export default Footer;
