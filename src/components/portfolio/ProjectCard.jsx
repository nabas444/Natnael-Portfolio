import React from "react";
import { Link } from "react-router-dom";
import "../../styles/projects.css";

const ProjectCard = ({ id, title, category, description, image, techStack, liveUrl, githubUrl }) => {
  return (
    <article className="project-card">
      <Link to={`/projects/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="project-card-image">
          <img src={image} alt={title} loading="lazy" />
          <div className="project-card-overlay" />
        </div>
        <div className="project-card-body">
          <div className="project-card-category">{category}</div>
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-description">{description}</p>
          <div className="project-card-tags">
            {techStack.slice(0, 4).map((tech) => (
              <span className="tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="project-card-links">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
          onClick={(event) => event.stopPropagation()}
        >
          ↗ Live Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
          onClick={(event) => event.stopPropagation()}
        >
          ⟨/⟩ Code
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;

