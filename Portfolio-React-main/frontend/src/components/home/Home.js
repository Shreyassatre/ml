import React, {useState,useEffect} from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Qualification from '../qualification/Qualification';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Certifications from '../certifications/Certifications';
import Contact from '../contact/Contact';

const Home = () => {
  const handleRedirect = () => {
    window.location.href = '/login';
  };

  return (
    <><section class="home section" id="about">
      <div class="home__container container grid">
        <div class="home__content grid">
          <Social/>
          <div className="home__img__container" onClick={handleRedirect}>
            <div
              className="home__img"
            ></div>
            <br />
            <div className="shadow">
              <center><hr /></center>
            </div>
          </div>
          <Data/>
        </div>
        <ScrollDown/>
      </div>
    </section>
    <Qualification/>
    <Skills/>
    <Projects/>
    <Certifications/>
    <Contact/></>
  )
}

export default Home