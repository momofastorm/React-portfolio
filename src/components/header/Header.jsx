/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
    return (
       <header>
        <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>Marcy Rappaport</h1>
            <h5 className="text-light">Fullstack Technical Trainer</h5>
            <CTA />
        </div>
        </header>
    )
}

export default Header
