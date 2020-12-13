import React from 'react';
import './Header.css';
import logo from './img/logotpp.jpeg';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={logo} alt="" />
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__Line">The Printed Parcel</span>
                </div>
            </div>
            <div className="header__search">
                <input type="text" className="header__searchfield" />
                <SearchIcon className="header__searchicon" />
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__Line">Help Center</span>
                </div>
            </div>
        </div>
    )
}

export default Header
