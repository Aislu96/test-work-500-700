import Card from "../Card/Card";
import cards from "../../../utils/constants";
import "../News/News.css";
import ButtonBanner from "../../BottonBanner/ButtonBanner";

function News({ref}) {

    return (
        <section className="news" id='news' ref={ref}>
            <h2 className="news__title">НОВОСТИ</h2>
            <div className="news__cards">
                {cards.map((card, id) => {
                    return (<Card key={id} card={card}/>)
                })}
            </div>
            <ButtonBanner  nameClass={"about-project__group_active"}/>
        </section>
    );
}

export default News;
