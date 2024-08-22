// src/components/About.js
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const About = () => {
  return (

    <HelmetProvider>

      <div className="about-page">
          
            <Helmet>
              <title>About - My Portfolio</title>
            </Helmet>

            <h1>Chisom Uche</h1>
            <h3>Software Developer.</h3>

      </div>

    </HelmetProvider>

  );
};

export default About;
