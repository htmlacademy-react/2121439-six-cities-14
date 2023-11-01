import PremiumCardArticle from './city-card-component/card-premium-article';
import CityCardRating from './city-card-component/rating';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type CardCityProps = {
  src: string;
  title: string;
  price: number;
  id: number;
  type: string;
};

function CityCard({ src, title, price, id, type }: CardCityProps): JSX.Element {
  const [active, setActive] = useState(false);

  const mouseHandlerEnter = () => {
    setActive(true);
  };

  const mouseHandlerLeave = () => {
    setActive(false);
  };

  return (
    <article
      className={`cities__card place-card ${
        active ? 'cities__card--active' : ''
      }`}
      onMouseEnter={mouseHandlerEnter}
      onMouseLeave={mouseHandlerLeave}
    >
      <PremiumCardArticle />
      <div className="cities__image-wrapper place-card__image-wrapper">
        <img
          className="place-card__image"
          src={src}
          width="260"
          height="200"
          alt="Place image"
        />
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <CityCardRating />
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CityCard;
