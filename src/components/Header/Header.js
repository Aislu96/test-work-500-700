import logo from "../../images/logo.svg";
import './Header.css'
import {useState} from "react";
import ButtonArrow from "../ButtonArrow/ButtonArrow";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";
import NavInfo from "./NavInfo/NavInfo";

function Header({handleClickButton}) {
    const [menu, setMenu] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <header className="header">
            <div className={popupOpen ? "header__block header__block_active" : "header__block"}>
                <img className="header__logo" src={logo} alt="Логотип проекта"/>
                <Menu isSetMenu={setMenu} menu={menu} />
                <Nav menu={menu} openPopup={setPopupOpen} handleClickButton={handleClickButton} popup={popupOpen} />
            </div>
            {menu && <Nav nameClass={"header__nav_open"} menu={menu} openPopup={setPopupOpen} handleClickButton={handleClickButton} popup={popupOpen}/>}
            {popupOpen && !menu && <NavInfo />}
        </header>
    )
}

export default Header;
