import '../Card/Card.css';

function Card({card}) {
    return (
            <article className="card">
                <img className="card__img" alt="Картинка блока новости" src={card.image}/>
                <h3 className="card__title">{card.title}</h3>
                <p className="card__subtitle">{card.subtitle}</p>
                <p className="card__data">01 января 1990</p>
            </article>
    )
}

export default Card;
