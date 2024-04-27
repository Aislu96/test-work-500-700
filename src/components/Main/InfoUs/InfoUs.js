import arrowUp from "../../../images/arrowUp.svg";
import arrowDown from "../../../images/arrowDown.svg";
import "../InfoUs/InfoUs.css";
import {useState} from "react";

function InfoUs({subtitle, text}) {
    const [activeButton, setActiveButton] = useState(false);

    function handleButton() {
        setActiveButton(!activeButton)
    }

    return (
        <div className="about-us__block">
            <div className="about-us__group">
                <h3 className="about-us__subtitle">{subtitle}</h3>
                {activeButton ?
                    <button className="about-us__button" type="button" onClick={handleButton}>
                        <img src={arrowDown} alt="Картинка стрелки вниз" className="about-us__button-img"/>
                    </button> :
                    <button className="about-us__button" type="button" onClick={handleButton}>
                        <img src={arrowUp} alt="Картинка стрелки вверх" className="about-us__button-img"/>
                    </button>
                }
            </div>
            <div className={activeButton? "about-us__text about-us__text_open": "about-us__text"}>{text}</div>
        </div>
    );
}

export default InfoUs;
