import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';
import wgf from '../assets/wgf.png';
import makeup1 from '../assets/makeup1.png';
import dragpoto from '../assets/dragpoto.png';
import matchgm from '../assets/matchgm.png';
import aajaib from '../assets/aajaib.png';
import tdl from '../assets/tdl.png';
import port1 from '../assets/port1.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [show, setShow] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const titleRef = useRef(null);
  const filterRef = useRef(null);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'Web Galeri Foto',
      category: "Web App's",
      description: 'aplikasi web dengan backend PHP & MySQL untuk menampilkan dan mengelola koleksi gambar.',
      image: wgf,
      tags: ['HTML','CSS','PHP', 'MySQL'],
      github: 'https://github.com/FebbyWulansariD/websitegaleri_foto.git',
      demo: 'http://localhost/websitegaleri_foto/index.php'
    },
    {
      id: 2,
      title: 'Angka Ajaib',
      category: "Mini Project",
      description: 'mini game sederhana berbasis JavaScript untuk menebak angka secara interaktif.',
      image: aajaib,
      tags: ['HTML','CSS','JavaScript'],
      github: 'https://github.com/FebbyWulansariD/AngkaRahasia-',
      demo: 'file:///C:/xampp/htdocs/AngkaRahasia%F0%9F%94%90/AngkaRahasia%F0%9F%94%90.html'
    },
    {
      id: 3,
      title: 'Web Makeup Essentials',
      category: "Web App's",
      description: 'website e-commerce bertema makeup dengan fitur halaman produk',
      image: makeup1,
      tags: ['HTML','CSS','JavaScript'],
      github: 'https://github.com/yourusername/laravel-ecommerce',
      demo: 'http://localhost/makeup2/beranda.html'
    },
    {
      id: 4,
      title: 'Portfolio',
      category: 'Mini Project',
      description: 'tampilan UI modern sebagai representasi diri dan karya saya.',
      image: port1,
      tags: ['HTML','CSS'],
      github: 'https://github.com/yourusername/laravel-ecommerce',
      demo: 'http://127.0.0.1:5500/index.html'
    },
    {
      id: 5,
      title: 'Drag & Drop Gallery',
      category: "Mini Project",
      description: 'fitur interaktif menyeret dan menyusun foto dalam galeri.',
      image: dragpoto,
      tags: ['HTML','CSS','JavaScript'],
      github: 'https://github.com/yourusername/trackify',
      demo: 'http://127.0.0.1:5500/PixieDrag.html'
    },
    {
      id: 6,
      title: 'Memory Game',
      category: "Mini Project",
      description: 'permainan mencocokkan gambar yang melatih konsentrasi pengguna.',
      image: matchgm,
      tags: ['HTML','CSS','JavaScript'],
      github: 'https://github.com/FebbyWulansariD/memory-game',
      demo: 'file:///C:/xampp/htdocs/memory-game/memory-game.html'
    },
    {
      id: 7,
      title: 'To-do List',
      category: "Mini Project",
      description: 'aplikasi manajemen tugas sederhana berbasis JavaScript.',
      image: tdl,
      tags: ['HTML','CSS','JavaScript'],
      github: 'https://github.com/FebbyWulansariD/todo-app',
      demo: 'file:///C:/xampp/htdocs/todo-app/todo-app.html'
    }
  ];

  const filters = ['All', "Web App's", "Mini Project", 'Figma Design'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Untuk judul dan deskripsi
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.target === titleRef.current && entry.isIntersecting) {
            setShow(true);
            setTimeout(() => setShowFilters(true), 500);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  // Untuk card project
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach(ref => {
      if (ref) cardObserver.observe(ref);
    });

    return () => {
      projectRefs.current.forEach(ref => {
        if (ref) cardObserver.unobserve(ref);
      });
    };
  }, [filteredProjects]);

  return (
    <section className="projects-section" id="projects">
      <h2 ref={titleRef} className={`projects-title fade-up ${show ? 'show' : ''}`}>Projects</h2>
      <p className={`projects-desc fade-up ${show ? 'show' : ''}`}>
        I have worked on a wide range of projects. From web apps to designs. Here are some of my works.
      </p>

      <div className="projects-filters" ref={filterRef}>
        {filters.map((filter, idx) => (
          <button
            key={filter}
            className={`filter-button slide-in-right ${showFilters ? 'show' : ''} ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
            style={{ transitionDelay: `${idx * 0.15}s` }} // animasi urut
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <div
            className="project-card"
            key={project.id}
            ref={el => (projectRefs.current[index] = el)}
          >
            <img src={project.image} alt={project.title} />
            <div className="tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              <a href={project.demo} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
