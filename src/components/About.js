// src/components/About.js
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "../assets/styles/about.css"

const About = () => {
  return (

    <HelmetProvider>

      <div className="about-page">
          
            <Helmet>
              <title>About - My Portfolio</title>
            </Helmet>

          <div className='b_img'>
              <div className='intro_title'>
                  <h1 className='name_title'>Chisom Uche</h1>
                  <h3 className='pro_title'>Frontend Developer | Aspiring Cloud Engineer | Technical Writer</h3>
                </div>

                <div className='background_info'>
                  <p>
                    I am a frontend developer with a strong interest in creating visually compelling and user-friendly digital experiences. My passion for design goes beyond the screen—I enjoy drawing, which allows me to explore creativity in new ways.
                    In addition to my development skills, I am deeply invested in technical writing. I believe that clear and concise documentation is crucial in making complex concepts accessible to everyone. My goal is to bridge the gap between technical complexity and user understanding.
                    Currently, I am working towards AWS certification, with the intention of diving into cloud computing. My aim is to integrate this knowledge with my existing expertise to create scalable, cloud-based solutions that enhance the user experience.
                    With a unique blend of technical skills, design sensibility, and a passion for clear communication, I am constantly seeking opportunities to make a meaningful impact in the tech world.
                  </p>
                </div>

                <div className='educ_'>
                  <h3> Education</h3>
                </div>

                <div className='uni_one'>

                  <div className='sch_one'>
                    <span className='sch_logo1'></span>
                    <div className='name_date'>
                      <h3>Hanze University of Applied Science,Groningen.</h3>
                      <h3>Sept2020 - July 2022</h3>
                      <h3>Smart Systems Engineering(MSC)</h3>
                    </div>  

                    <span className='sch_logo'></span>
                    <div className='name_date'>
                      <h3>University of computer science and skills Lodz, Poland</h3>
                      <h3>Sept2014 - July 2018</h3>
                      <h3>Computer science and skills(BSC)</h3>
                    </div>    
                  </div>

                </div>

                 {/* Add Certifications */}

              {/* Relevant Experience */}

              <div class="work-experiences">
                    <h2>Work Experiences</h2>

                    <div class="experience-container">
                      <div class="experience-item">
                        <h3>Mid Frontend Developer(Remote)</h3>
                        <p>DCRegina LTD, Lagos, Nigeria</p>
                        <span>2023 - Present</span>
                      </div>

                      <div class="experience-item">
                        <h3>Machine Learning Engineer(internship)</h3>
                        <p>Pilot On Demand, Assen, Netherlands</p>
                        <span>2021 - 2022</span>
                      </div>

                      <div class="experience-item">
                        <h3>Software Developer</h3>
                        <p>Ecleaps LTD, Lagos, Nigeria</p>
                        <span>2018 - 2020</span>
                      </div>
                    </div>
                  </div>

                  <section class="skills-contributions">
            <h2>Key Skills & Contributions</h2>

            <div class="skills">
                <h4>Frontend Development</h4>
                <ul>
                    <li>Designed and developed user-friendly interfaces for lab production software applications.</li>
                    <li>Translated design mockups into functional web interfaces using React.js.</li>
                    <li>Implemented interactive features and data visualization components.</li>
                    <li>Conducted usability testing and iteratively improved frontend designs.</li>
                </ul>
            </div>

            <div class="skills">
                <h4>Backend Development</h4>
                <ul>
                    <li>Developed and maintained Java-based backend services.</li>
                    <li>Integrated backend services with frontend applications.</li>
                </ul>
            </div>

            <div class="skills">
                <h4>Machine Learning</h4>
                <ul>
                    <li>Researched, designed, and implemented a machine learning prototype application.</li>
                    <li>Developed a real-time object detection and identification system using TensorFlow and OpenCV.</li>
                </ul>
            </div>

            <div class="skills">
                <h4>Web Development</h4>
                <ul>
                    <li>Developed responsive web applications using HTML5, CSS3, JavaScript, and Java.</li>
                    <li>Utilized React and Vue.js frameworks to design dynamic user interfaces.</li>
                </ul>
            </div>

            <div class="skills">
                <h4>Collaboration & Communication</h4>
                <ul>
                    <li>Worked closely with UX/UI designers, backend developers, and clients.</li>
                    <li>Managed client systems remotely, providing timely troubleshooting and maintenance.</li>
                </ul>
            </div>
        </section>

        <section class="skills-certifications">
            <h2>Skills</h2>
            <ul>
                <li>Programming Languages: Java, JavaScript, Python, TypeScript</li>
                <li>Frameworks and Libraries: Spring, Hibernate, React.js, Vue.js, jQuery</li>
                <li>Version Control: Git</li>
                <li>Testing and Debugging: Debugging, Unit Testing</li>
                <li>Soft Skills: Problem-solving, Time Management, Communication Skills, Research Skills</li>
            </ul>
        </section>

        <section class="certifications-projects">

            <h2>Projects</h2>
            <ul>
                <li>Inventory Management System: Developed a Java-based inventory management system for real-time tracking and management of warehouse items.</li>
                <li>E-commerce Platform: Built an e-commerce platform with a Java backend and React.js frontend.</li>
                <li>Data Visualization Dashboard: Created a data visualization dashboard using Java and JavaScript.</li>
            </ul>
        </section>

          </div>
          

                

        </div>

    </HelmetProvider>

  );
};

export default About;
