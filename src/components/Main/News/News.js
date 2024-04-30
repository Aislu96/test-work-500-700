import Card from "../Card/Card";
import cards from "../../../utils/constants";
import "../News/News.css";
import ButtonBanner from "../../BottonBanner/ButtonBanner";
import {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useResize} from "../../../hooks/useResize";

function News({ref}) {
    const {width, isScreenSm} = useResize();
    const slider = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className="news" id='news' ref={ref}>
            <h2 className="news__title">НОВОСТИ</h2>
            <div className="news__cards">
                {isScreenSm &&
                    <Slider ref={slider} {...settings}>
                {cards.map((card, id) => {
                    return (<Card key={id} card={card} />)
                })}
                    </Slider>
                }
                {!isScreenSm && cards.map((card, id) => {
                        return (<Card key={id} card={card} />)
                    })}
            </div>
            <ButtonBanner slider={slider} nameClass={"about-project__group_active"}/>
        </section>
    );
}

export default News;
