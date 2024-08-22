// src/components/Projects.js
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Projects = () => {
  return (
    <HelmetProvider>
    <div className="projects-page">
      <Helmet>
        <title>Projects - My Portfolio</title>
      </Helmet>

      <h1>Projects</h1>
      <p>Details about your projects.</p>
    </div>
    </HelmetProvider>

  );
};

export default Projects;
