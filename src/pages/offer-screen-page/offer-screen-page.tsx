import { Helmet } from 'react-helmet-async';
import { v4 as uuid4 } from 'uuid';
import CityCard from '../../components/city-card/city-card';
import Header from '../../components/header/header';
import OfferScreenImageList from './offer-screen-component/offer-screen-image-list/offer-screen-image-list';
import OfferImageDataArr from '../../mocks/offer/offer-screen-image-data';
import OfferHostUser from './offer-screen-component/offer-host-user/offer-host-user';
import OfferHostUserArr from '../../mocks/offer/offer-host-user-data';
import OfferScreenListReviews from './offer-screen-component/offer-screen-reviews/offer-screen-list-reviews';
import OfferScreenReviewsUserArr from '../../mocks/reviews/offer-reviews-data';
import OfferInsideList from './offer-screen-component/offer-inside-list/offer-inside-list';
import OfferInsideListArr from '../../mocks/offer/offer-inside-list-data';
import Form from '../../components/form/form';
import { AppCityProp } from '../../type/offer.type';
import { CardCityCharacter } from '../../const';

type OfferScreenProp = {
  dataCity: AppCityProp[];
};

function OfferScreenPage({ dataCity }: OfferScreenProp): JSX.Element {
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
              {OfferImageDataArr.map(
                (item): JSX.Element => (
                  <OfferScreenImageList src={item} key={uuid4()} />
                )
              )}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {OfferInsideListArr.map((item) => (
                    <OfferInsideList title={item} key={uuid4()} />
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                {OfferHostUserArr.map((item) => (
                  <OfferHostUser
                    name={item.name}
                    status={item.status}
                    key={uuid4()}
                  />
                ))}
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">1</span>
                </h2>
                <ul className="reviews__list">
                  {OfferScreenReviewsUserArr.map((item) => (
                    <OfferScreenListReviews
                      avatar={item.avatar}
                      userName={item.userName}
                      reviewsText={item.reviewsText}
                      reviewsDate={item.reviewsDate}
                      key={uuid4()}
                    />
                  ))}
                </ul>

                <Form />
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighborhood
            </h2>
            <div className="near-places__list places__list">
              {dataCity.map(
                (item): JSX.Element => (
                  <CityCard
                    src={item.previewImage}
                    title={item.title}
                    price={item.price}
                    type={item.type}
                    key={item.id}
                    id={item.id}
                    classCard={CardCityCharacter.ClassNearCard}
                    classImageWrapper={CardCityCharacter.ClassNearImageWrapper}
                    width={CardCityCharacter.WidthOffer}
                    height={CardCityCharacter.HeightOffer}
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
