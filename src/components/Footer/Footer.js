import logo from "../../images/logo.svg";
import youtube from "../../images/youtube.svg";
import telegram from "../../images/telegram.svg";
import vk from "../../images/vk.svg";
import '../Footer/Footer.css';

function Footer({handleClickButton}) {
    return (
        <footer className="footer">
            <div className="footer__group">
                <img className="footer__logo" src={logo} alt="Логотип проекта"/>
                <div className="footer__links">
                    <a className='footer__link' href='#' target='_blank' rel='noopener noreferrer'><img
                        className="footer__img" src={youtube} alt="Картинка Youtube"/></a>
                    <a className='footer__link' href='#' target='_blank' rel='noopener noreferrer'><img
                        className="footer__img" src={telegram} alt="Картинка Telegram"/></a>
                    <a className='footer__link' href='#' target='_blank' rel='noopener noreferrer'><img
                        className="footer__img" src={vk} alt="Картинка Вконтакте"/></a>
                </div>
            </div>
            <nav className="footer__nav">
                <ul className="footer__nav-list">
                    <li className="footer__nav-link">
                        <p className='footer__nav-text'>О нас</p>
                    </li>
                    <li className="footer__nav-link">
                        <p className='footer__nav-text'>Проекты</p>
                    </li>
                    <li className="footer__nav-link" onClick={handleClickButton}>
                        <a className='footer__nav-text' href='#news' name="news">Новости</a>
                    </li>
                </ul>
                <ul className="footer__nav-list">
                    <li className="footer__nav-link" onClick={handleClickButton}>
                        <a className='footer__nav-text' href='#about' name="about">FAQ</a>
                    </li>
                    <li className="footer__nav-link" onClick={handleClickButton}>
                        <a className='footer__nav-text' href='#newsletter' name="newsletter">Контакты</a>
                    </li>
                </ul>
            </nav>
            <div className="footer__info">
                <p className="footer__text">г. Горгород,ул. Мегаполисная, 1</p>
                <p className="footer__text">+7 (000) 000-00-00</p>
                <p className="footer__text">email@email.ru</p>
            </div>
        </footer>
    );
}

export default Footer;
