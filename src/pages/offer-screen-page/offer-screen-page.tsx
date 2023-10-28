import CityCard from '../../components/city-card/city-card';
import Header from '../../components/header/header';
import DataCardCityArr from '../../components/city-card/city-card-data';
import OfferScreenImageList from './offer-screen-component/offer-screen-image-list/offer-screen-image-list';
import OfferImageDataArr from './offer-screen-component/offer-screen-image-list/offer-screen-image-data';
import OfferHostUser from './offer-screen-component/offer-host-user/offer-host-user';
import OfferHostUserArr from './offer-screen-component/offer-host-user/offer-host-user-data';
import OfferScreenListReviews from './offer-screen-component/offer-screen-reviews/offer-screen-list-reviews';
import OfferScreenRivewsUserArr from './offer-screen-component/offer-screen-reviews/offer-reviews-data';
import OfferInsideList from './offer-screen-component/offer-inside-list/offer-inside-list';
import OfferScreenRaitingReviewData from './offer-screen-component/offer-screen-reviews/offer-reviews-raiting-data';
import OfferScreenRaitingReview from './offer-screen-component/offer-screen-reviews/offer-screen-raiting-review';
import OfferInsideListArr from './offer-screen-component/offer-inside-list/offer-inside-list-data';
import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid';

function OfferScreenPage(): JSX.Element {
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
                  <OfferScreenImageList src={item} key={uuidv4()} />
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
                    <OfferInsideList title={item} key={uuidv4()} />
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                {OfferHostUserArr.map((item) => (
                  <OfferHostUser
                    name={item.name}
                    status={item.status}
                    key={uuidv4()}
                  />
                ))}
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot; <span className="reviews__amount">1</span>
                </h2>
                <ul className="reviews__list">
                  {OfferScreenRivewsUserArr.map((item) => (
                    <OfferScreenListReviews
                      avatar={item.avatar}
                      userName={item.userName}
                      reviewsText={item.reviewsText}
                      reviewsDate={item.reviewsDate}
                      key={uuidv4()}
                    />
                  ))}
                </ul>
                <form className="reviews__form form" action="#" method="post">
                  <label
                    className="reviews__label form__label"
                    htmlFor="review"
                  >
                    Your review
                  </label>
                  <div className="reviews__rating-form form__rating">
                    {OfferScreenRaitingReviewData.map((item) => (
                      <OfferScreenRaitingReview
                        value={item.value}
                        id={item.id}
                        forForm={item.forForm}
                        title={item.title}
                        key={item.id}
                      />
                    ))}
                  </div>
                  <textarea
                    className="reviews__textarea form__textarea"
                    id="review"
                    name="review"
                    placeholder="Tell how was your stay, what you like and what can be improved"
                  />
                  <div className="reviews__button-wrapper">
                    <p className="reviews__help">
                      To submit review please make sure to set{' '}
                      <span className="reviews__star">rating</span> and describe
                      your stay with at least{' '}
                      <b className="reviews__text-amount">50 characters</b>.
                    </p>
                    <button
                      className="reviews__submit form__submit button"
                      type="submit"
                      disabled
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {DataCardCityArr.map(
                (item): JSX.Element => (
                  <CityCard
                    src={item.src}
                    title={item.title}
                    price={item.price}
                    key={item.id}
                    id={item.id}
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