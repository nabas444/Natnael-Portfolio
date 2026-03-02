import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaPaintBrush, FaServer, FaTools } from "react-icons/fa";
import "../styles/about.css";

const skills = [
  {
    Icon: FaLaptopCode,
    title: "Frontend Development",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3/SASS", "Next.js"],
  },
  {
    Icon: FaPaintBrush,
    title: "UI/UX Design",
    items: ["Figma", "Responsive Design", "Design Systems", "Accessibility", "Animation", "Prototyping"],
  },
  {
    Icon: FaTools,
    title: "Tools & DevOps",
    items: ["Git/GitHub", "Webpack/Vite", "Jest/Vitest", "CI/CD", "Docker", "VS Code"],
  },
  {
    Icon: FaServer,
    title: "Backend & Database",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Firebase"],
  },
];

const About = () => {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    skills: false,
    cta: false,
  });

  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const sections = [
      { key: "hero", ref: heroRef },
      { key: "skills", ref: skillsRef },
      { key: "cta", ref: ctaRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const sectionKey = entry.target.getAttribute("data-section");
          if (!sectionKey) return;
          setVisibleSections((prev) => ({ ...prev, [sectionKey]: true }));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach(({ key, ref }) => {
      if (!ref.current) return;
      ref.current.setAttribute("data-section", key);
      observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="about-page">
      <section
        ref={heroRef}
        className={`section about-reveal ${visibleSections.hero ? "is-visible" : ""}`}
        aria-label="About me"
      >
        <div className="container">
          <div className="about-hero-shell">
            <div className="about-photo-wrap">
              <div className="about-photo">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=680&fit=crop&crop=face"
                  alt="Natnael Abebe portrait"
                />
              </div>
            </div>

            <div className="about-info">
              <p className="about-kicker">Who I Am</p>
              <h1>Crafting Product-Ready Web Experiences</h1>
              <p className="about-role">Fullstack Developer & UI Engineer</p>
              <div className="about-bio">
                <p>
                  I am Natnael Abebe, a fullstack developer focused on building modern,
                  responsive, and accessible web experiences with strong performance and clean architecture.
                </p>
                <p>
                  I combine React-driven frontend engineering with practical backend systems to ship products that
                  look sharp, feel fast, and scale with real users.
                </p>
              </div>

              <div className="about-highlights">
                <div className="about-highlight">
                  <span className="value">10+</span>
                  <span className="label">Projects Built</span>
                </div>
                <div className="about-highlight">
                  <span className="value">24h</span>
                  <span className="label">Avg Response</span>
                </div>
                <div className="about-highlight">
                  <span className="value">100%</span>
                  <span className="label">Commitment</span>
                </div>
              </div>

              <div className="about-download">
                <a
                  href="#"
                  className="btn about-cv-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    alert("Connect your real CV PDF file URL here.");
                  }}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={skillsRef}
        className={`skills-section section about-reveal ${visibleSections.skills ? "is-visible" : ""}`}
        aria-label="Skills"
      >
        <div className="container">
          <div className="section-header about-section-header">
            <h2>Skills & Expertise</h2>
            <p>Technologies and tools I use to design, build, and ship high-quality products.</p>
          </div>
          <div className="skills-grid">
            {skills.map((category) => (
              <article className="skill-category" key={category.title}>
                <div className="skill-category-icon">
                  <category.Icon />
                </div>
                <h3>{category.title}</h3>
                <div className="skill-list">
                  {category.items.map((item) => (
                    <span className="skill-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={ctaRef}
        className={`section about-cta about-reveal ${visibleSections.cta ? "is-visible" : ""}`}
        aria-label="Call to action"
      >
        <div className="container">
          <div className="about-cta-panel">
            <h2>Ready to Build Something Exceptional?</h2>
            <p>I am open to freelance and full-time opportunities where design and engineering meet.</p>
            <Link to="/contact" className="btn about-cta-btn">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
