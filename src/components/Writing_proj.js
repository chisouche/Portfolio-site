// src/components/Projects.js
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "../assets/styles/writing_proj.css"

const Projects = () => {
  return (
    <HelmetProvider>
    <div className="projects-page">
      <Helmet>
        <title>Projects - My Portfolio</title>
      </Helmet>

      <div className="writing_container">
          <div className='intro_'>
            <h2 className='brief_intro'>
              My Writings
            </h2>
            <p className='brief_intro_p'>
            Explore my journey of translating complex technical concepts into clear, concise, and accessible content.      </p>
            
          </div>

          <div className='writing_cards_container'>
            <div class="writing_card">
                <div class="image-container">
                  <a href="https://talkible.vercel.app/" class="writing-external-link" >
                    <img src="https://user-images.githubusercontent.com/31516195/252760801-7035e590-6138-41ef-89de-ca8c3a3bc001.png" alt="Talkible" class="project-image" loading="lazy"/>
                  </a>
                </div>

                <div class="writing-details-container">
                  <h2 class="writing-heading">Talkible</h2>
                  <p class="writing-details">A new age social media where you can connect, share, and engage in a vibrant social network.</p>
                  <a href="https://talkible.vercel.app/" class="writing-live-link" >View live</a>
                </div>
              </div>

              <div class="writing_card">
                <div class="image-container">
                  <a href="https://talkible.vercel.app/" class="writing-external-link" >
                    <img src="https://user-images.githubusercontent.com/31516195/252760801-7035e590-6138-41ef-89de-ca8c3a3bc001.png" alt="Talkible" class="project-image" loading="lazy"/>
                  </a>
                </div>

                <div class="writing-details-container">
                  <h2 class="writing-heading">Talkible</h2>
                  <p class="writing-details">A new age social media where you can connect, share, and engage in a vibrant social network.</p>
                  <a href="https://talkible.vercel.app/" class="writing-live-link" >View live</a>
                </div>
              </div>
          </div>

          
        

        </div>






    </div>
    </HelmetProvider>

  );
};

export default Projects;
