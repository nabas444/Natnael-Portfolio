import React, { useState } from "react";
import { projects, categories } from "../data/projects.js";
import ProjectCard from "../components/portfolio/ProjectCard.jsx";
import "../styles/projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="projects-page">
      <div className="container">
        <div className="section-header">
          <h1>My Projects</h1>
          <p>
            A curated collection of projects showcasing my skills in frontend
            development, UI design, and full-stack engineering.
          </p>
        </div>

        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p
            style={{
              textAlign: "center",
              color: "var(--color-text-muted)",
              padding: "var(--space-3xl) 0",
            }}
          >
            No projects found in this category.
          </p>
        )}
      </div>
    </main>
  );
};

export default Projects;

