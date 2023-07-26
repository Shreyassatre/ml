import React, { useState } from 'react'
import'./qualification.css'

const Qualification = () => {

    const[toggleTab1, setToggle1] = useState(true)

  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualification</h2>
        <span className="My personal journey"></span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleTab1?"qualification__button active__tab button--flex":"qualification__button button--flex"} onClick={()=>setToggle1(true)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={toggleTab1?"qualification__button button--flex":"qualification__button active__tab button--flex"} onClick={()=>setToggle1(false)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Internships
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleTab1?'qualification__content-active':'qualification__content'}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.E - Artificial Intelligence & Data Science</h3>
                            <span className="qualification__subtitle">Vivekanand Education Society's Institute of Technology</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Diploma - Computer Engineering</h3>
                            <span className="qualification__subtitle">Vidyalankar Polytechnic</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - 2021
                            </div>
                        </div>

                    </div>
                </div>
                
                <div className={toggleTab1?'qualification__content':'qualification__content-active'}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Developer</h3>
                            <span className="qualification__subtitle">Cloud Counselage pvt. ltd.</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                March 2020 - May 2020
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification