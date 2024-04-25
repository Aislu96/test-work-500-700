import Card from "../Card/Card";
import cards from "../../../utils/constants";
import "../News/News.css";

function News() {

    return (
        <section className="news">
            <h2 className="news__title">НОВОСТИ</h2>
            <div className="news__cards">
                {cards.map(card => {
                return (<Card card={card} />)
            })}
            </div>
        </section>
    );
}

export default News;
