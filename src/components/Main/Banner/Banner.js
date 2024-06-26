import "../Banner/Banner.css";
import ButtonBanner from "../../BottonBanner/ButtonBanner";

function Banner({title, subtitle, bannerImg, slider}){
    return (
        <section className="about-project">
            <div className="about-project__block">
                <div className="about-project__info">
                    <button className="about-project__button" type="button">Сайты</button>
                    <h1 className="about-project__title">{title}</h1>
                    <h2 className="about-project__subtitle">{subtitle}</h2>
                </div>
                <ButtonBanner slider={slider} />
            </div>
            <img src={bannerImg} alt="Картинка Баннера" className="about-project__img"/>
        </section>
    )
}

export default Banner;
