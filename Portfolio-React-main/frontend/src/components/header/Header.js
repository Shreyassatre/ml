import React, {useContext} from 'react'
import './header.css'
import AuthContext from '../../context/AuthContext';
import LogOut from '../login/Logout'
import { LoginBtn } from '../login/Login';

const Header = () => {
    const {loggedIn} = useContext(AuthContext)

  return (
    <header className="header" id="header">
            <nav className="nav container">
                <a href="/#about" className="nav__logo">S#re@s</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">

                        <li className="nav__item">
                            <a href="/#qualification" className="nav__link">
                                <i className='uil uil-graduation-cap nav__icon'></i>
                                <span className="nav__name">Qualification</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#skills" className="nav__link">
                                <i className='uil uil-book-alt nav__icon'></i>
                                <span className="nav__name">Skills</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#projects" className="nav__link">
                                <i className='uil uil-laptop nav__icon'></i>
                                <span className="nav__name">Projects</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#certifications" className="nav__link">
                                <i className='uil uil-award nav__icon'></i>
                                <span className="nav__name">Certifications</span>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="/#contact" className="nav__link">
                                <i className='uil uil-message nav__icon'></i>
                                <span className="nav__name">Contact</span>
                            </a>
                        </li>
                        {
                            loggedIn === false && (
                                <>
                                    <li className="nav__item">
                                        <a href="/login" className="nav__link">
                                            <i className='uil uil-user nav__icon'></i>
                                            <span className="nav__name"><LoginBtn/></span>
                                        </a>
                                    </li>
                                </>
                            )
                        }
                        {
                            loggedIn === true && (
                                <>
                                    <li className="nav__item">
                                        <a href="" className="nav__link">
                                            <i className='uil uil-user nav__icon'></i>
                                            <span className="nav__name"><LogOut/></span>
                                        </a>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                </div>

                <img src="images/profile_logo.jpg" alt="" className="nav__img"/>
            </nav>
        </header>
  )
}

export default Header