import React from 'react'

import './Header.scss';

function Header() {
    return (
        <header className="header">
            <div className="header__title">
                <h1 className="header__heading">
                    Wanna Rate Some? Let's Start!
                </h1>
            </div>
            {/* <div className="header__search">
                <form className="header__form">
                    <input placeholder="Search businesses" type="text" className="header__form--input" />
                    <button className="header__form--btn">Search</button>
                </form>
            </div> */}
        </header>
    )
}

export default Header
