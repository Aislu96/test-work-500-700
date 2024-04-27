import arrowDown from "../../images/arrowDown.svg";
import arrowUp from "../../images/arrowUp.svg";
import {useState} from "react";
import NavInfo from "../Header/NavInfo/NavInfo";

function ButtonArrow({text, popup, openPopup, menu}) {
    const [arrowButton, setArrowClick] = useState(false);

    function handleArrowClick() {
        setArrowClick(!arrowButton);
        openPopup(!popup)
    }

    return (
        <>
        <li className="header__nav-link">
            <p className='header__nav-text'>{text}</p>
            {arrowButton ?
                <button className="header__nav-button" type="button" onClick={handleArrowClick}>
                    <img src={arrowDown} alt="Картинка стрелки вниз" className="header__button-img"/>
                </button> :
                <button className="header__nav-button" type="button" onClick={handleArrowClick}>
                    <img src={arrowUp} alt="Картинка стрелки вверх" className="header__button-img"/>
                </button>
            }
        </li>
    {popup && arrowButton && menu && <NavInfo />}
        </>
    )
}

export default ButtonArrow;
