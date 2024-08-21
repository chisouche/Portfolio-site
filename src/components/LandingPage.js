// src/components/LandingPage.js
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../assets/styles/landingPage.css';
import image_1 from '../assets/images/imgone.png';
import image_2 from '../assets/images/imgtwo.png';
import image_3 from '../assets/images/imgthree.png';
import image_4 from '../assets/images/imgfour.png';
import image_5 from '../assets/images/imgfive.png';


const LandingPage = () => {
  return (
    <HelmetProvider>
      <div className="landing_css">
        <Helmet>
          <title>Home || My Portfolio</title>
          <meta name="description" content="This is the landing page" />
        </Helmet>

        <div className="intro_css">
          <div className='intro_'>
            <h1 className='intro_h1'>
              Software Developer. Technical Writer.<br></br>
              Combining Technical Precision with Creative Insight.
            </h1>
            
          </div>
        
        <div className='project_grid delay slide'>
          <a href="/" className='proj_item'>

            <div className='proj_item_image'>
              <img src={image_1} alt='place'/>
            </div>

            <div className='proj_item_info'>
              <div className='proj_item_comp'>Project name</div>
              <div className='proj_item_desc'>Project description</div>
            </div>
          </a>

          <a href="/" className='proj_item grid1'>

            <div className='proj_item_image'>
              <img src={image_2} alt='place'/>
            </div>

            <div className='proj_item_info'>
              <div className='proj_item_comp'>Project name</div>
              <div className='proj_item_desc'>Project description</div>
            </div>
          </a>

          <a href="/" className='proj_item grid1'>

            <div className='proj_item_image'>
              <img src={image_3} alt='place'/>
            </div>

            <div className='proj_item_info'>
              <div className='proj_item_comp'>Project name</div>
              <div className='proj_item_desc'>Project description</div>
            </div>
          </a>

          <a href="/" className='proj_item grid1'>

            <div className='proj_item_image'>
              <img src={image_4} alt='place'/>
            </div>

            <div className='proj_item_info'>
              <div className='proj_item_comp'>Project name</div>
              <div className='proj_item_desc'>Project description</div>
            </div>
          </a>

          <a href="/" className='proj_item grid1'>

            <div className='proj_item_image'>
              <img src={image_5} alt='place'/>
            </div>

            <div className='proj_item_info'>
              <div className='proj_item_comp'>Project name</div>
              <div className='proj_item_desc'>Project description</div>
            </div>
          </a>

          <a href="/" className='proj_item btn_item '>

          <div className='next_project grid2'>
            <span className='next_title'>Writings</span>
                
          </div>
          </a>

        </div>

        </div>

        <div className='bottom_landing'>
          <div className='abt_desc'>
            <p>I’m Ace, a software developer and technical writer with a passion for blending technical precision with creative insight.I bring years of experience in developing intuitive user interfaces and creating clear, impactful technical documentation. I thrive on solving complex problems, translating intricate concepts into accessible content, and driving projects from inception to completion. My goal is to bridge the gap between technology and its users, ensuring that both function seamlessly together.</p>
            <a href='/'>More about me</a>
          </div>

          <div className='contact'>
            <p></p>
          </div>
        </div>

      <div className='container_start'>
          <div className='start_project'>
            <div className='columns level'>
              <div className='column level-item'>
                <h1 className='title'> Start a project</h1>
              </div>
              
              <div className='column level-item'>
              <p>Ready to collaborate on something amazing? Let’s chat over coffee.The coffee’s on me.</p>
              </div>

              <div className='column level-item'>
                  <a href='/contact' className='contact_button'>
                    <button className='contact_btn'>
                      <span>💬</span><span>Let’s Talk</span>  
                    </button>
                  </a>
              </div>

            </div>
            </div>
                
      </div>
        


      </div>
    </HelmetProvider>
  );
};

export default LandingPage;
