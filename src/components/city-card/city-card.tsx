import { useState } from 'react';
import { Link } from 'react-router-dom';

import PremiumCardArticle from './city-card-component/card-premium-article';
import CityCardRating from './city-card-component/city-card-rating';

type CardCityProps = {
  src: string;
  title: string;
  price: number;
  id: number;
  type: string;
  width: string;
  height: string;
  classCard: string;
  classImageWrapper: string;
  isPremium: boolean;
};

function CityCard({
  src,
  title,
  price,
  id,
  type,
  height,
  width,
  classCard,
  classImageWrapper,
  isPremium,
}: CardCityProps): JSX.Element {
  const [active, setActive] = useState(false);

  const mouseHandlerEnter = () => {
    setActive(true);
  };

  const mouseHandlerLeave = () => {
    setActive(false);
  };

  return (
    <article
      className={`${classCard} place-card ${
        active ? `${classCard}--active ` : ''
      }`}
      onMouseEnter={mouseHandlerEnter}
      onMouseLeave={mouseHandlerLeave}
    >
      <PremiumCardArticle premium={isPremium} className="place-card" />
      <div className={`${classImageWrapper} place-card__image-wrapper`}>
        <img
          className="place-card__image"
          src={src}
          width={width}
          height={height}
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
          <Link to={`/offer/${id - 1}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CityCard;
