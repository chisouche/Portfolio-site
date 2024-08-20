// src/components/Projects.js
import React from 'react';
import { Helmet } from 'react-helmet';

const Projects = () => {
  return (
    <div className="projects-page">
      <Helmet>
        <title>Projects - My Portfolio</title>
      </Helmet>

      <h1>Projects</h1>
      <p>Details about your projects.</p>
    </div>
  );
};

export default Projects;
