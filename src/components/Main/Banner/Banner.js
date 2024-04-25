import arrowLeft from "../../../images/arrowLeft.svg";
import arrowRight from "../../../images/arrowRight.svg";
import "../Banner/Banner.css";

function Banner({title, subtitle, bannerImg}){
    return (
        <section className="about-project cycle-slideshow">
            <div className="about-project__block">
                <div className="about-project__info">
                    <button className="about-project__button" type="button">Сайты</button>
                    <h1 className="about-project__title">{title}</h1>
                    <h2 className="about-project__subtitle">{subtitle}</h2>
                </div>
                <div className="about-project__group">
                    <button className="about-project__arrow-btn" type="button" ><img src={arrowLeft}
                                                                                    alt="Картинка стрелки влево"
                                                                                    className="about-project__button-img"/>
                    </button>
                    <button className="about-project__arrow-btn" type="button"><img src={arrowRight}
                                                                                    alt="Картинка стрелки вправо"
                                                                                    className="about-project__button-img"/>
                    </button>
                </div>
            </div>
            <img src={bannerImg} alt="Картинка Баннера" className="about-project__img"/>
        </section>
    )
}

export default Banner;
