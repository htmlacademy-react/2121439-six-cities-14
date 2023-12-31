import { Helmet } from 'react-helmet-async';
import { v4 as uuid4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CityCard from '../../components/city-card/city-card';
import Header from '../../components/header/header';
import OfferScreenImageList from './offer-screen-component/offer-screen-image-list/offer-screen-image-list';
import OfferHostUser from './offer-screen-component/offer-host-user/offer-host-user';
import { offerHostUsers } from '../../mocks/offer/offer-host-user-data';
import OfferScreenListReviews from './offer-screen-component/offer-screen-reviews/offer-screen-list-reviews';
import { offerScreenReviewUsers } from '../../mocks/reviews/offer-reviews-data';
import OfferInsideList from './offer-screen-component/offer-inside-list/offer-inside-list';
import Form from '../../components/form/form';
import { AppCityProp } from '../../type/offer.type';
import { CardCityCharacter } from '../../const';

import CityCardPremium from '../../components/city-card/city-card-component/card-premium-article';
import Map from '../../components/map/map';
import { ActiveCityMap } from '../../const';
import { POINTS } from '../../mocks/map/points';
import { cityData } from '../../mocks/offer/city-data';
import NotFoundScreen from '../../components/not-found-screen/not-found-screen';

type OfferScreenProp = {
  dataCity: AppCityProp[];
};

function OfferScreenPage({ dataCity }: OfferScreenProp): JSX.Element {
  const { id } = useParams<string>();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [id]);
  const strId = id?.slice(1);

  const data = cityData.find((el): boolean => el.id === Number(strId));

  if (!data) {
    return <NotFoundScreen />;
  }
  const ratingStarPercentage: number = (data.rating / 6) * 100;
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Offer page</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {data?.images.map(
                (item): JSX.Element => (
                  <OfferScreenImageList src={item} key={uuid4()} />
                )
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <CityCardPremium premium={data.isPremium} className="offer" />
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{data.title}</h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${ratingStarPercentage}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {`${ratingStarPercentage.toFixed(2)}`}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {data.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${data.bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${data.maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{`${data.price}$`}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {data.goods.map(
                    (good): JSX.Element => (
                      <OfferInsideList title={good} key={uuid4()} />
                    )
                  )}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                {offerHostUsers.map(
                  (info): JSX.Element => (
                    <OfferHostUser
                      avatarUrl={info.avatarUrl}
                      name={info.name}
                      isPro={info.isPro}
                      id={info.id}
                      key={uuid4()}
                    />
                  )
                )}
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">1</span>
                </h2>
                <ul className="reviews__list">
                  {offerScreenReviewUsers.map(
                    (item): JSX.Element => (
                      <OfferScreenListReviews
                        user={item.user}
                        key={uuid4()}
                        rating={item.rating}
                        comment={item.comment}
                        date={item.date}
                      />
                    )
                  )}
                </ul>

                <Form />
              </section>
            </div>
          </div>
          <Map
            points={POINTS}
            location={ActiveCityMap.Amsterdam.location}
            block="offer"
            selectedPoint={undefined}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighborhood
            </h2>
            <div className="near-places__list places__list">
              {dataCity.map(
                (city): JSX.Element => (
                  <CityCard
                    src={city.previewImage}
                    title={city.title}
                    price={city.price}
                    type={city.type}
                    key={city.id}
                    id={city.id}
                    classCard={CardCityCharacter.ClassNearCard}
                    classImageWrapper={CardCityCharacter.ClassNearImageWrapper}
                    width={CardCityCharacter.WidthOffer}
                    height={CardCityCharacter.HeightOffer}
                    isPremium={city.isPremium}
                    rating={city.rating}
                  />
                )
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreenPage;
