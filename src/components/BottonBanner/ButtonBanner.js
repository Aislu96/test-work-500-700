import arrowLeft from "../../images/arrowLeft.svg";
import arrowRight from "../../images/arrowRight.svg";
import "../BottonBanner/ButtonBanner.css";

function ButtonBanner({nameClass}){
    return(
        <div className={`about-project__group ${nameClass}`}>
        <button className="about-project__arrow-btn" type="button" ><img src={arrowLeft}
                                                                         alt="Картинка стрелки влево"
                                                                         className="about-project__button-img"/>
        </button>
        <button className="about-project__arrow-btn" type="button"><img src={arrowRight}
                                                                        alt="Картинка стрелки вправо"
                                                                        className="about-project__button-img"/>
        </button>
    </div>)
}

export default ButtonBanner;
