import logo from "../../images/logo.svg";
import arrowUp from '../../images/arrowUp.svg';
import './Header.css'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип проекта"/>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-link">
                        <p className='header__nav-text'>О нас</p>
                        <button className="header__nav-button" type="button"><img src={arrowUp} alt="Картинка стрелки вверх" className="header__button-img"/></button>
                    </li>
                    <li className="header__nav-link">
                        <p className='header__nav-text'>Проекты</p>
                        <button className="header__nav-button" type="button"><img src={arrowUp} alt="Картинка стрелки вверх" className="header__button-img"/></button>
                    </li>
                    <li className="header__nav-link">
                        <p className='header__nav-text'>Новости</p>
                    </li>
                    <li className="header__nav-link">
                        <p className='header__nav-text'>FAQ</p>
                    </li>
                    <li className="header__nav-link">
                        <p className='header__nav-text'>Контакты</p>
                    </li>
                </ul>
            </nav>
            <button className="header__button" type="button">Связаться с нами</button>
        </header>
    )
}

export default Header;
