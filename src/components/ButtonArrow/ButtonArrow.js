import arrowDown from "../../images/arrowDown.svg";
import arrowUp from "../../images/arrowUp.svg";
import {useState} from "react";
import NavInfo from "../Header/NavInfo/NavInfo";

function ButtonArrow({text, acor, openAcor, menu}) {
    const [arrowButton, setArrowClick] = useState(false);

    function handleArrowClick() {
        setArrowClick(!arrowButton);
        openAcor(!acor)
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
    {acor && arrowButton && menu && <NavInfo />}
        </>
    )
}

export default ButtonArrow;
