import bannerOne from "../../../images/BannerOne.png";
import Banner from "../Banner/Banner";
import bannerTwo from "../../../images/BannerTwo.png";
import bannerThree from "../../../images/BannerThree.png";
import Slider from "react-slick";
import {useRef} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutProject() {
    const slider = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
            <Slider ref={slider} {...settings} >
                <Banner bannerImg={bannerOne} title={"Заголо вок 1 Заголо вок 1 Заголо вок 1"} slider={slider}
                        subtitle={"Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта"}/>
                <Banner bannerImg={bannerTwo} title={"Заголо вок 2 Заголо вок 2 Заголо вок 2"} slider={slider}
                        subtitle={"Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта"}/>
                <Banner bannerImg={bannerThree} title={"Заголо вок 3 Заголо вок 3 Заголо вок 3"} slider={slider}
                        subtitle={"Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта Описание проекта"}/>
            </Slider>
    )
}

export default AboutProject;
