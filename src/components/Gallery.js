import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import pkl3 from "../assets/pkl3.jpeg";
import pkl4 from "../assets/pkl4.jpeg";
import pkl7 from "../assets/pkl7.jpeg";

const galleryData = [
  { src: pkl3, caption: "Tugas PKL" },
  { src: pkl4, caption: "Codingan AbsensKaryawan menggunakan framework yii" },
  { src: pkl7, caption: "Buku Tentang PHP" },
];

const Gallery = () => {
  const itemRefs = useRef([]);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Langkah 1: Judul muncul
            titleRef.current.classList.add("show");

            // Langkah 2: Setelah 800ms, deskripsi muncul
            setTimeout(() => {
              descRef.current.classList.add("show");
            }, 800);

            // Langkah 3: Setelah 1600ms, gambar-gambar muncul satu per satu
            setTimeout(() => {
              itemRefs.current.forEach((ref, index) => {
                if (ref) {
                  ref.classList.add("show");
                  ref.style.setProperty("--delay", index);
                }
              });
            }, 1600);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleClick = (e) => {
    const el = e.currentTarget;
    el.classList.add("clicked");
    setTimeout(() => {
      el.classList.remove("clicked");
    }, 1000);
  };

  return (
    <section className="gallery-section" ref={sectionRef}>
      <h2 className="gallery-title" ref={titleRef}>
        My Tech Moments
      </h2>
      <p className="gallery-description" ref={descRef}>
        Cuplikan momen saat belajar langsung di lapangan. Bekerja di depan
        layar, memahami sistem, dan tumbuh sebagai developer muda ✨
      </p>

      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            ref={(el) => (itemRefs.current[index] = el)}
            onClick={handleClick}
          >
            <img src={item.src} alt={item.caption} />
            <div className="caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
