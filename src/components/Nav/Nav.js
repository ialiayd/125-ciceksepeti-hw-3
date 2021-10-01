import React from 'react'

import './Nav.scss';
import Logo from './logo.svg';

function Nav() {
    return (
        <nav className="navigation">
            <div className="navigation__container">
                <div className="navigation__logo-box">
                    <a href="/"><img src={Logo} alt="" className="navigation__logo" /></a>
                </div>
                <ul className="navigation__list">
                    <li className="navigation__list-item">
                        <a href="/" className="navigation__link">Profile</a>
                    </li>
                    <li className="navigation__list-item">
                        <a href="/" className="navigation__link">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
