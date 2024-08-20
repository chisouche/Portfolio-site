// src/components/Contact.js
import React from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className="contact-page">
       <Helmet>
        <title>Contact - My Portfolio</title>
      </Helmet>
      <h1>Contact</h1>
      <p>Contact details or a contact form.</p>
    </div>
  );
};

export default Contact;
