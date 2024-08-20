// src/components/About.js
import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="about-page">
      <Helmet>
        <title>About - My Portfolio</title>
      </Helmet>

      <h1>About Me</h1>
      <p>Information about yourself.</p>
    </div>
  );
};

export default About;
