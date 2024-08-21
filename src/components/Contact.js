// src/components/Contact.js
import React from 'react';
import { Helmet } from 'react-helmet';
import "../assets/styles/contact.css"

const Contact = () => {
  return (
    <div className="contact-page">
        <Helmet>
          <title>Contact - My Portfolio</title>
        </Helmet>
        <div class="contact-container">
            <h2 class="contact-title">Let's Get in Touch!</h2>
            <p class="contact-intro">Got questions, feedback, or just want to say hi? Fill out the form below, and I'll be in touch with you soon!</p>
            
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name"/>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email"/>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message"></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>


    </div>
  );
};

export default Contact;
