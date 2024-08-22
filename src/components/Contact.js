// src/components/Contact.js
import React, {useState} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "../assets/styles/contact.css"


const Contact = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/contact.php', { // Replace with the actual path
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });

            const result = await response.json();

            if (result.status === 'success') {
                setResponseMessage('Thank you for your message!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage('There was a problem sending your message.');
            }
        } catch (error) {
            setResponseMessage('There was a problem sending your message.');
        }
    }; 

  return (

<HelmetProvider>

    <div className="contact-page">

                <Helmet>
                <title>Contact - My Portfolio</title>
                </Helmet>
                
            
                <div className="contact-container">

                    <h2 className="contact-title">Let's Get in Touch!</h2>
                    <p className="contact-intro">Got questions, feedback, or just want to say hi? Fill out the form below, and I'll be in touch with you soon!</p>
                    
                    <p>{responseMessage}</p>

                    <form onSubmit={handleSubmit} id='contact_form' className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" autoComplete='off' required/>
                        </div>


                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" autoComplete='off' required/>
                        </div>


                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
                        </div>

                        <button type="submit">Send</button>
                    </form>
                </div>

        </div>
    </HelmetProvider>
  );
};

export default Contact;
