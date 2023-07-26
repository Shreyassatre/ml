import React, { useState } from 'react'
import './skills.css'

const Skills = () => {
  const [toggleTab, setToggle] = useState(0)

  const skillsData = {
    categories: [
      {
        title: "Languages",
        skills: [
          {
            name: "JavaScript",
            logo: "images/js-logo.png"
          },
          {
            name: "Python",
            logo: "images/python-logo.png"
          }
        ]
      },
      {
        title: "Data Bases",
        skills: [
          {
            name: "MySQL",
            logo: "images/mysql.png"
          },
          {
            name: "MS SQL Server",
            logo: "images/sql-server.png"
          },
          {
            name: "Mongo DB",
            logo: "images/mongoDB.png"
          }
        ]
      },
      {
        title: "Web Dev",
        skills: [
          {
            name: "HTML",
            logo: "images/html-logo.png"
          },
          {
            name: "CSS",
            logo: "images/css-logo.png"
          },
          {
            name: "React JS",
            logo: "images/React-icon.png"
          },
          {
            name: "Node JS",
            logo: "images/node-js.png"
          },
          {
            name: "Express JS",
            logo: "images/express-logo.png"
          }
        ]
      },
      {
        title: "Big Data",
        skills: [
          {
            name: "Hadoop",
            logo: "images/hadoop-logo.png"
          },
          {
            name: "Hive",
            logo: "images/hive-logo.svg"
          },
          {
            name: "Spark",
            logo: "images/spark-logo.png"
          },
          {
            name: "Spark SQL",
            logo: "images/spark-sql.png"
          }
        ]
      },
      // Add more categories as needed
      {
        title: "DevOps",
        skills: [
          {
            name: "Docker",
            logo: "images/docker.png"
          },
          {
            name: "Git",
            logo: "images/git.png"
          },
          {
            name: "GitHub",
            logo: "images/github.png"
          }
        ]
      }
    ]
  };
  

  return (
    <section className="skills section" id="skills">
      <div className="section__title">Skills</div>
      <span className="My personal journey"></span>

      <div className="skills__container container">
        <center>
          <div className="skills_tabs">
            <div className={toggleTab === 0 ? "skills__button active__tab button--flex" : "skills__button button--flex"} onClick={() => setToggle(0)}>
              All
            </div>
            {skillsData.categories.map((category, index) => (
              <div
                key={index}
                className={toggleTab === index + 1 ? "skills__button active__tab button--flex" : "skills__button button--flex"}
                onClick={() => setToggle(index + 1)}
              >
                {category.title}
              </div>
            ))}
          </div>
        </center>

        <div className="skills__sections">
          {toggleTab === 0 && (
            <React.Fragment>
              {skillsData.categories.map((category, index) => (
                <React.Fragment key={index}>
                  <h5 className="div__title">{category.title}:</h5>
                  <div className="skills__content container skills__content-active">
                    {category.skills.map((skill, skillIndex) => (
                      <div className="skills__data" key={skillIndex}>
                        <div className="skills__logo">
                          <img className='skills__img' src={skill.logo} alt="" />
                        </div>
                        <center>
                          <small>{skill.name}</small>
                        </center>
                      </div>
                    ))}
                  </div>
                  {index !== skillsData.categories.length - 1 && <hr className="div__line" />}
                </React.Fragment>
              ))}
            </React.Fragment>
          )}

          {toggleTab !== 0 && (
            <React.Fragment>
              <div className="skills__content container skills__content-active">
                {skillsData.categories[toggleTab - 1].skills.map((skill, skillIndex) => (
                  <div className="skills__data" key={skillIndex}>
                    <div className="skills__logo">
                      <img className='skills__img' src={skill.logo} alt="" />
                    </div>
                    <center>
                      <small>{skill.name}</small>
                    </center>
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </section>
  )
}

export default Skills;
