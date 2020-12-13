import React from 'react';
import './navbar.css';

function navbar() {
    return (
        <div className="navbar">
            <div className="header__nav">
                <div to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Birthday</span>
                    </div>
                </div>
                <div to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Cakes</span>
                    </div>
                </div>
                <div to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Flowers</span>
                    </div>
                </div>
                <div to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Anniversary</span>
                    </div>
                </div>
                <div to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Personalised</span>
                    </div>
                </div>
                <div to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Plants</span>
                    </div>
                </div>
                <div to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Combos</span>
                    </div>
                </div>
                <div to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Chocolates</span>
                    </div>
                </div>
                <div to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">Occation</span>
                    </div>
                </div>
                <div to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineTwo">More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default navbar;
