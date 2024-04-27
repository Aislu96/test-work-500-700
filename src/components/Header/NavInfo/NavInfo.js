function NavInfo() {
    return (
        <nav className="header__info">
            <ul className="header__info-list">
                <li className="header__info-link">
                    <p className='header__info-text'>О 500на700</p>
                </li>
                <li className="header__info-link">
                    <p className='header__info-text'>Документы</p>
                </li>
                <li className="header__info-link">
                    <p className='header__info-text'>Устойчивое развитие</p>
                </li>
            </ul>
            <ul className="header__info-list">
                <li className="header__info-link">
                    <p className='header__info-text'>Команда</p>
                </li>
                <li className="header__info-link">
                    <p className='header__info-text'>Стратегия</p>
                </li>
            </ul>
        </nav>
    );
}

export default NavInfo;
