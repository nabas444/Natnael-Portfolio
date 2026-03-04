import React, { useState } from "react";
import { projects, categories } from "../data/projects.js";
import ProjectCard from "../components/portfolio/ProjectCard.jsx";
import "../styles/projects.css";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleCategories = categories.filter((cat) => cat !== "UI Design");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="projects-page">
      <div className="container">
        <div className="section-header projects-header">
          <p className="projects-kicker">Selected Works</p>
          <h1>My Projects</h1>
          <p>
            A curated set of frontend and fullstack builds focused on polished interfaces,
            scalable architecture, and production-ready user experience.
          </p>
        </div>

        <div className="project-filters-wrap">
          <div className="project-filters" role="group" aria-label="Filter projects by category">
            {visibleCategories.map((cat) => (
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
          <p className="projects-filter-meta">
            Showing <strong>{filteredProjects.length}</strong> project
            {filteredProjects.length === 1 ? "" : "s"} in <strong>{activeFilter}</strong>
          </p>
        </div>

        <div key={activeFilter} className="projects-grid projects-grid-animate">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="projects-empty">
            No projects found in this category.
          </p>
        )}
      </div>
    </main>
  );
};

export default Projects;
