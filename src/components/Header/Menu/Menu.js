import React from "react";
import './Menu.css';

function Menu({isSetMenu, menu}) {
    return (
        menu ? (
            <button className="header__menu-button header__menu-button_active" type="button" onClick={() => {
                isSetMenu(!menu);

            }}>
                <span></span>
            </button>
        ) : (
            <button
                className='header__menu-button'
                onClick={() => {
                    isSetMenu(!menu);
                }} type="button">
                <span/>
            </button>
        )
    )
}

export default Menu;
