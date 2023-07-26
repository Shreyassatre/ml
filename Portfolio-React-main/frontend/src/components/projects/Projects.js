import React, { useState } from 'react';
import './projects.css';

const projectsData = {
  categories: [
    {
      title: 'Web Development',
      projects: [
        {
          name: 'Dairy Farmers Portal',
          description: '- Developed a website for dairy farmers using React.js,Node.js, Flask, Express, and MongoDB. \n- Created features including cow disease detection, animal clinic locator, prediction system for milk storage methodologies based on weather data via a Weather API, and trade portal to eliminate middlemen in the supply chain. \n- Implemented multi-language support to increase usability and reach for users.',
          image: 'images/lbs.png',
          githubLink: "https://github.com/SinghShreyansh/LBS-Dairy"
        },
        {
          name: 'Covid-19 App',
          description: '- A Covid-19 app tracks & shows the daily statistics about covid-19 cases according to countries & Latest updates. \n - Checks the health condition (Symptoms of Covid-19, mental and physical health) of user with help of quiz. \n - Also created payment gateway to make donations & Admin panel.',
          image: 'images/covid-19-project.png',
          githubLink: 'https://github.com/Shreyassatre/MERN-Covid19-webapp',
          // demoLink: 'https://covid-19-tracker-fe157.web.app/'
        },
        {
          name: 'Gmail Form Validation',
          description: '- Tired to mimic the behaviour of Gmail\'s registration & login form validation using JS regular expressions. \n- Used HTML,CSS and BootStrap to create UI of login form and home page of google. \n- Used SweetAlert API & Font-Awesome Icons.',
          image: 'images/form-validation-project.png',
          githubLink: 'https://github.com/Shreyassatre/Gmail-Form-Validation-Demo',
          // demoLink: 'https://shreyassatre.github.io/Gmail-Form-Validation-Demo/'
        },
        {
          name: 'Chat Bot',
          description: '- Created a responsive chat bot for company to clearify doubts of newly admitted interns. \n- Used speech API in JS to convert text to speech. \n- Developed a responsive web UI using BootStrap.',
          image: 'images/internship-project.png',
          githubLink: 'https://github.com/Shreyassatre/chat-bot',
          // demoLink: 'https://shreyassatre.github.io/chat-bot/'
        }
      ]
    },
    {
      title: 'Big Data',
      projects: [
        {
          name: 'Facebook Data Analysis using Hive',
          description: '- Analyzed Facebook\'s user data (99,004 records) using Hive. \n- Understood the concept of how HiveQL queries coverted & runs as MapReduce. \n- Learned to work on Hortonworks distribution',
          image: 'images/facebook-analysis-project.png',
          githubLink: '', // Add the GitHub link here
          demoLink: '' // Add the demo link here
        }
      ]
    },
    {
      title: 'Analytics',
      projects: [
        {
          name: 'Exploratory Data Analysis on Titanic Dataset',
          description: '- Explored/Analyzed Titanic Dataset. \n- Used libraries like numpy, pandas, matplotlib, seaborn. \n- Cleaned Data using various methods.',
          image: 'images/titanic-analysis-project.png',
          githubLink: 'https://github.com/Shreyassatre/Statistics_for_AI-DS/blob/main/Exploratory_data_Analysis(Titanic_dataset).ipynb',
          // demoLink: 'https://colab.research.google.com/drive/10BfIsmWc589Jwc04IPzoSTfpaAVR7MLJ'
        }
      ]
    }
    // Add more categories as needed
  ]
};

const Projects = () => {
  const [toggleTab, setToggle] = useState(0);

  

  return (
    <div className="projects section" id="projects">
      <div className="section__title">Projects</div>

      <div className="projects__container container">
        <div className="projects__tabs">
          <div
            className={toggleTab === 0 ? 'projects__button active__tab button--flex' : 'projects__button button--flex'}
            onClick={() => setToggle(0)}
          >
            All
          </div>
          {projectsData.categories.map((category, index) => (
            <div
              key={index}
              className={toggleTab === index + 1 ? 'projects__button active__tab button--flex' : 'projects__button button--flex'}
              onClick={() => setToggle(index + 1)}
            >
              {category.title}
            </div>
          ))}
        </div>

        <div className="projects__sections">
          {toggleTab === 0 && (
            <React.Fragment>
              {projectsData.categories.map((category, index) => (
                <React.Fragment key={index}>
                  <h5 className="div__title">{category.title}:</h5>
                  <br/>
                  <div className="projects__content container projects__content-active">
                    {category.projects.map((project, projectIndex) => (
                      <div key={projectIndex} className="projects__data">
                        <img className="projects__img" src={project.image} alt="" />
                        <div className="projects__info">
                          <div className="projects__name mt-3 mb-2">{project.name}</div>
                          <div className="projects__description">
                            {project.description.split('\n').map((line, lineIndex) => (
                              <p key={lineIndex}>{line}</p>
                            ))}
                          </div>
                          <br />
                        <div className="projects__buttons">
                          {project.githubLink && (
                            <a href={project.githubLink} className="demo__button1" target="_blank" rel="noopener noreferrer">
                              GitHub
                            </a>
                          )}
                          {project.demoLink && (
                            <a href={project.demoLink} className="demo__button1" target="_blank" rel="noopener noreferrer">
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    ))}
                  </div>
                  {index !== projectsData.categories.length - 1 && <hr className="div__line" />}
                </React.Fragment>
              ))}
            </React.Fragment>
          )}

          {toggleTab !== 0 && (
            <React.Fragment>
              <div className="projects__content container projects__content-active">
                {projectsData.categories[toggleTab - 1].projects.map((project, projectIndex) => (
                <div key={projectIndex} className="projects__data">
                   <img className="projects__img" src={project.image} alt="" />
                   <div className="projects__info">
                     <div className="projects__name">{project.name}</div>
                     <small>{project.description}</small>
                     <br />
                     <br />
                     <div className="projects__buttons">
                       {project.githubLink && (
                         <a href={project.githubLink} className="demo__button1" target="_blank" rel="noopener noreferrer">
                           GitHub
                         </a>
                       )}
                       {project.demoLink && (
                         <a href={project.demoLink} className="demo__button1" target="_blank" rel="noopener noreferrer">
                           Demo
                         </a>
                       )}
                     </div>
                   </div>
                 </div>
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
