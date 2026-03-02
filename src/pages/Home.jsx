import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/portfolio/ProjectCard.jsx";
import "../styles/home.css";

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Node.js", icon: "🟩" },
    { name: "CSS3", icon: "🎨" },
    { name: "Git", icon: "🔀" },
    { name: "MySql", icon: "🍃" },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="hero" aria-label="Introduction">
        <div className="container">
          <div className="hero-content">
            <div className="animate-fade-up">
              <div className="hero-greeting">Hi, my name is</div>
              <h1 className="hero-name">
                 Natnael <span className="highlight">Abebe</span>
              </h1>
              <p className="hero-title">Frontend Developer & UI Engineer</p>
              <p className="hero-description">
                I build exceptional digital experiences that live at the intersection
                of design and engineering. Specializing in React, TypeScript, and
                modern web technologies.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View Projects →
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="hero-visual animate-fade-up-delay-2">
              <div className="hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Alex Chen - Frontend Developer"
                />
                <div className="hero-decoration" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack section" aria-label="Technology stack">
        <div className="container">
          <div className="section-header">
            <h2>Tech Stack</h2>
            <p>Technologies I work with on a daily basis</p>
          </div>
          <div className="tech-grid">
            {techStack.map((tech) => (
              <div className="tech-item" key={tech.name}>
                <span className="tech-icon">{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview section" aria-label="About me preview">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-preview-text">
              <h2>Crafting Digital Excellence</h2>
              <p>
                With over 4 years of experience in frontend development, I've had
                the privilege of working with startups and established companies to
                bring their digital visions to life. I believe in writing clean,
                maintainable code that creates exceptional user experiences.
              </p>
              <p>
                My approach combines technical expertise with a keen eye for design,
                ensuring every project not only functions flawlessly but also
                delights users at every interaction.
              </p>
              <Link to="/about" className="btn btn-outline" style={{ marginTop: "8px" }}>
                Learn More About Me →
              </Link>

              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">30+</div>
                  <div className="stat-label">Projects Built</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, var(--color-primary-glow), rgba(6,182,212,0.08))",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-3xl)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "360px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--color-text-secondary)",
                lineHeight: "1.8",
                whiteSpace: "pre-line",
              }}
            >
              {`const developer = {
  name: "Alex Chen",
  role: "Frontend Developer",
  skills: ["React", "TypeScript", "CSS"],
  passion: "Building great UX",
  available: true
};`}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section" aria-label="Featured projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>A selection of my recent work</p>
          </div>
          <div className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "var(--space-2xl)" }}>
            <Link to="/projects" className="btn btn-outline">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section section" aria-label="Call to action">
        <div className="container">
          <h2>Let's Build Something Great Together</h2>
          <p>
            I'm currently available for freelance work and full-time positions.
            If you have a project in mind, let's talk!
          </p>
          <Link to="/contact" className="btn btn-primary">
            Get In Touch →
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

