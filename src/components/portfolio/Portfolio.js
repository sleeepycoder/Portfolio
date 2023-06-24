import React from 'react';
import './portfolio.css';
import projects from '../../db.json'
import {FaSafari } from "react-icons/fa";
const Portfolio = () => {
  return (
    <section className="project-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-safari fa-spin"></i> Demo
            </a>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github fa-beat"></i> GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};



export default Portfolio