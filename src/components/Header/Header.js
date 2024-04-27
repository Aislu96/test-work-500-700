import logo from "../../images/logo.svg";
import './Header.css'
import {useEffect, useState} from "react";
import ButtonArrow from "../ButtonArrow/ButtonArrow";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";
import NavInfo from "./NavInfo/NavInfo";

function Header({handleClickButton}) {
    const [menu, setMenu] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        if(menu === false) {
            setPopupOpen(false);
        }
    }, [menu])

    return (
        <>
        <header className="header">
            <div className={popupOpen ? "header__block header__block_active" : "header__block"}>
                <img className="header__logo" src={logo} alt="Логотип проекта"/>
                <Menu isSetMenu={setMenu} menu={menu} />
                <Nav menu={menu} openPopup={setPopupOpen} handleClickButton={handleClickButton} popup={popupOpen} />
            </div>
            {menu && <Nav nameClass={"header__nav_open"} menu={menu} openPopup={setPopupOpen} handleClickButton={handleClickButton} popup={popupOpen}/>}
            {popupOpen && !menu && <NavInfo />}
        </header>
            {popupOpen && <div className="filter"></div>}
    </>
    )
}

export default Header;
