/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile-picture.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
       <header>
        <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>Marcy Rappaport</h1>
            <h5 className="text-light">Fullstack Technical Trainer</h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src={ME} alt="profile-picture" />
            </div>
            <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
        </header>
    )
}

export default Header
