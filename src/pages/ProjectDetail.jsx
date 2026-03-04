import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/projects.js";
import "../styles/project-detail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(false);
    const timer = setTimeout(() => setIsReady(true), 30);
    return () => clearTimeout(timer);
  }, [id]);

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <main className={`project-detail ${isReady ? "is-ready" : ""}`}>
      <div className="container">
        <div className="project-detail-hero">
          <Link to="/projects" className="project-detail-back">
            Back to Projects
          </Link>

          <div className="project-detail-hero-shell">
            <div className="project-detail-hero-main">
              <div className="project-detail-category">{project.category}</div>
              <h1 className="project-detail-title">{project.title}</h1>
              <p className="project-detail-summary">{project.summary}</p>
              <div className="project-detail-meta">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo -&gt;
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  View Code -&gt;
                </a>
              </div>
            </div>

            <div className="project-detail-quickstats" aria-hidden="true">
              <div className="quickstat-item">
                <span className="label">Stack Size</span>
                <strong>{project.techStack.length}</strong>
              </div>
              <div className="quickstat-item">
                <span className="label">Features</span>
                <strong>{project.features.length}</strong>
              </div>
              <div className="quickstat-item">
                <span className="label">Case Notes</span>
                <strong>{project.challenges.length}</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-image">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            onError={(event) => {
              event.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>

        <div className="project-detail-grid">
          <div>
            <div className="detail-section">
              <h3>Key Features</h3>
              <div className="features-list">
                {project.features.map((feature, index) => (
                  <div
                    className="feature-item"
                    style={{ animationDelay: `${0.06 * index}s` }}
                    key={index}
                  >
                    <div className="feature-icon">+</div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="detail-section">
              <h3>Challenges & Solutions</h3>
              {project.challenges.map((challenge, index) => (
                <div
                  className="challenge-card"
                  style={{ animationDelay: `${0.08 * index}s` }}
                  key={index}
                >
                  <h4>{challenge.title}</h4>
                  <p>{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="project-detail-sidebar">
            <div className="sidebar-card">
              <h4>Technologies Used</h4>
              <div className="sidebar-tech-list">
                {project.techStack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Links</h4>
              <div className="sidebar-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  GitHub Repo
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <div style={{ height: "var(--space-4xl)" }} />
    </main>
  );
};

export default ProjectDetail;
