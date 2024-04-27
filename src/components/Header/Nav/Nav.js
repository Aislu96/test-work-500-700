import ButtonArrow from "../../ButtonArrow/ButtonArrow";
import NavInfo from "../NavInfo/NavInfo";

function Nav({openPopup, handleClickButton, popup, menu, nameClass}) {
    return (
        <nav className={menu? `header__nav ${nameClass}` : "header__nav"}>
            <ul className="header__nav-list">
                <ButtonArrow text={"О нас"} popup={popup} openPopup={openPopup} menu={menu}/>
                <ButtonArrow text={"Проекты"} popup={popup} openPopup={openPopup} menu={menu}/>
                <li className="header__nav-link" onClick={handleClickButton}>
                    <a className='header__nav-text' href='#news' name="news">Новости</a>
                </li>
                <li className="header__nav-link" onClick={handleClickButton}>
                    <a className='header__nav-text' href='#about' name="about">FAQ</a>
                </li>
                <li className="header__nav-link" onClick={handleClickButton}>
                    <a className='header__nav-text' href='#newsletter' name="newsletter">Контакты</a>
                </li>
            </ul>
            <button className={menu? `header__button  ${nameClass}` : "header__button "} type="button">Связаться с нами</button>
        </nav>);
}

export default Nav;
