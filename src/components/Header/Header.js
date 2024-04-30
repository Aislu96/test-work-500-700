import logo from "../../images/logo.svg";
import './Header.css'
import {useEffect, useState} from "react";
import ButtonArrow from "../ButtonArrow/ButtonArrow";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";
import NavInfo from "./NavInfo/NavInfo";

function Header({handleClickButton, onClickPopupOpen, popup}) {
    const [menu, setMenu] = useState(false);
    const [acorOpen, setAcorOpen] = useState(false);

    useEffect(() => {
        if(menu === false) {
            setAcorOpen(false);
        }
    }, [menu])

    return (
        <>
        <header className="header">
            <div className={acorOpen ? "header__block header__block_active" : "header__block"}>
                <img className="header__logo" src={logo} alt="Логотип проекта"/>
                <Menu isSetMenu={setMenu} menu={menu} />
                <Nav onClickPopupOpen={onClickPopupOpen} popup={popup} menu={menu} openAcor={setAcorOpen} handleClickButton={handleClickButton} acor={acorOpen} />
            </div>
            {menu && <Nav onClickPopupOpen={onClickPopupOpen} popup={popup} nameClass={"header__nav_open"} menu={menu} openAcor={setAcorOpen} handleClickButton={handleClickButton} />}
            {acorOpen && !menu && <NavInfo />}
            </header>
            {/*{acorOpen && <div className="filter"></div>}*/}
    </>
    )
}

export default Header;
