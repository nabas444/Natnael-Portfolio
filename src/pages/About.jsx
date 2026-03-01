import React from "react";
import { Link } from "react-router-dom";
import "../styles/about.css";

const skills = [
  {
    icon: "⚛️",
    title: "Frontend Development",
    items: ["React", "TypeScript", "JavaScript ES6+", "HTML5", "CSS3/SASS", "Next.js"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    items: ["Figma", "Responsive Design", "Design Systems", "Accessibility", "Animation", "Prototyping"],
  },
  {
    icon: "🛠️",
    title: "Tools & DevOps",
    items: ["Git/GitHub", "Webpack/Vite", "Jest/Vitest", "CI/CD", "Docker", "VS Code"],
  },
  {
    icon: "🗄️",
    title: "Backend & Database",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "Firebase"],
  },
];

const experience = [
  {
    date: "2023 — Present",
    role: "Senior Frontend Developer",
    company: "TechNova Inc.",
    description:
      "Leading frontend architecture for the company's flagship SaaS product. Reduced bundle size by 40% and improved Core Web Vitals scores.",
  },
  {
    date: "2021 — 2023",
    role: "Frontend Developer",
    company: "DigitalCraft Studio",
    description:
      "Built responsive web applications for clients across e-commerce, fintech, and healthcare. Mentored 3 junior developers.",
  },
  {
    date: "2020 — 2021",
    role: "Junior Frontend Developer",
    company: "WebFlow Agency",
    description:
      "Developed pixel-perfect UI components and collaborated with designers to implement dynamic web experiences.",
  },
];

const education = [
  {
    degree: "B.S. Computer Science",
    institution: "University of California, Berkeley",
    year: "2016 — 2020",
  },
  {
    degree: "Frontend Development Certificate",
    institution: "Meta Professional Certificate",
    year: "2021",
  },
];

const About = () => {
  return (
    <main className="about-page">
      {/* Hero */}
      <section className="section" aria-label="About me">
        <div className="container">
          <div className="about-hero">
            <div className="about-photo">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=530&fit=crop&crop=face"
                alt="Alex Chen"
              />
            </div>
            <div className="about-info">
              <h1>About Me</h1>
              <p className="about-role">Frontend Developer & UI Engineer</p>
              <div className="about-bio">
                <p>
                  I'm Alex Chen, a frontend developer based in San Francisco with
                  a passion for creating beautiful, performant, and accessible web
                  experiences. With over 4 years of professional experience, I
                  specialize in React, TypeScript, and modern CSS.
                </p>
                <p>
                  My journey in web development started during college when I built
                  my first website for a student organization. Since then, I've
                  worked with startups and established companies, helping them bring
                  their digital products to life.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new coffee shops,
                  contributing to open-source projects, or experimenting with
                  creative coding and generative art.
                </p>
              </div>
              <div className="about-download">
                <a
                  href="#"
                  className="btn btn-primary"
                  onClick={(event) => {
                    event.preventDefault();
                    alert("CV download would be triggered here — connect a real PDF file to enable this.");
                  }}
                >
                  📄 Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section section" aria-label="Skills">
        <div className="container">
          <div className="section-header">
            <h2>Skills & Expertise</h2>
            <p>Technologies and tools I'm proficient in</p>
          </div>
          <div className="skills-grid">
            {skills.map((category) => (
              <div className="skill-category" key={category.title}>
                <div className="skill-category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <div className="skill-list">
                  {category.items.map((item) => (
                    <span className="skill-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section" aria-label="Work experience">
        <div className="container">
          <div className="section-header">
            <h2>Work Experience</h2>
            <p>My professional journey</p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot" />
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section" style={{ background: "var(--color-surface)" }} aria-label="Education">
        <div className="container">
          <div className="section-header">
            <h2>Education</h2>
            <p>Academic background and certifications</p>
          </div>
          <div className="education-grid">
            {education.map((item, index) => (
              <div className="education-card" key={index}>
                <h3>{item.degree}</h3>
                <p className="institution">{item.institution}</p>
                <p className="year">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <h2>Interested in working together?</h2>
          <p style={{ maxWidth: "500px", margin: "var(--space-lg) auto var(--space-2xl)" }}>
            I'm always open to discussing new projects and opportunities.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get In Touch →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;

