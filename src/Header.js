import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="" />
            <div className="header__search">
                <input type="text" className="header__searchfield" />
                <SearchIcon className="header__searchicon" />
            </div>
        </div>
    )
}

export default Header
