import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const refs = useRef([]);
  let i = 0;

  // 💌 Tambahkan state untuk form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 🌸 Animasi muncul bertahap
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        let delay = 0;
        entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => refs.current.indexOf(a.target) - refs.current.indexOf(b.target))
          .forEach(entry => {
            const el = entry.target;
            el.style.transitionDelay = `${delay}s`;
            el.classList.add('show');
            observer.unobserve(el);
            delay += 0.3;
          });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach(el => el && observer.observe(el));

    return () => refs.current.forEach(el => el && observer.unobserve(el));
  }, []);

  // 📨 Tangani perubahan input
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ✨ Simulasi submit + reset form
  const handleSubmit = e => {
    e.preventDefault();
    alert("Pesanmu berhasil terkirim! ✨💕");
    setFormData({ name: '', email: '', message: '' }); // reset input
  };

  return (
    <section id="contact" className="contact-section">
      <h4 className="section-subtitle animate-up" ref={el => (refs.current[i++] = el)}>
        Get In Touch
      </h4>
      <h2 className="section-title animate-up" ref={el => (refs.current[i++] = el)}>
        Contact Me
      </h2>

      <div className="contact-container">
        {/* Info Kontak */}
        <div className="contact-info">
          {[
            {
              icon: 'fas fa-envelope',
              title: 'Email',
              text: 'febbywulansari@gmail.com',
              link: 'mailto:febbywulansari@gmail.com',
            },
            {
              icon: 'fab fa-instagram',
              title: 'Instagram',
              text: '@febbyd20_',
              link: 'https://www.instagram.com/febbyd20_?igsh=MXdoanF2cHhqdWNpYw==',
            },
            {
              icon: 'fab fa-whatsapp',
              title: 'WhatsApp',
              text: '+123456789',
              link: '#',
            },
          ].map((item, index) => (
            <div key={index} className="contact-box animate-up" ref={el => (refs.current[i++] = el)}>
              <i className={`${item.icon} contact-icon`}></i>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <a href={item.link}>Send a message</a>
            </div>
          ))}
        </div>

        {/* Form Kontak */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="animate-up"
            ref={el => (refs.current[i++] = el)}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="animate-up"
            ref={el => (refs.current[i++] = el)}
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            required
            className="animate-up"
            ref={el => (refs.current[i++] = el)}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div
            className="animate-up"
            ref={el => (refs.current[i++] = el)}
            style={{ width: '100%' }}
          >
            <button type="submit" className="full-width-button">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
