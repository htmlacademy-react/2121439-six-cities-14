import { Helmet } from 'react-helmet-async';
import { v4 as uuidv4 } from 'uuid';

import Header from '../../components/header/header';
import CityCard from '../../components/city-card/city-card';
import CityLocationList from './six-cities-main-component/city-locations-list/city-location-list';
import { cityLocationsData } from '../../mocks/city-locations-data';
import { AppCityProp } from '../../type/offer.type';
import { ActiveCityMap, CardCityCharacter } from '../../const';

import { POINTS } from '../../mocks/map/points';
import Map from '../../components/map/map';

type SixCitiesPageProps = {
  cityData: AppCityProp[];
  countOffer: number;
};

function SixCitiesMainPage({
  cityData,
  countOffer,
}: SixCitiesPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cityLocationsData.map(
                (cityName): JSX.Element => (
                  <CityLocationList name={cityName} key={uuidv4()} />
                )
              )}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {countOffer} places to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>

              <div className="cities__places-list places__list tabs__content">
                {cityData.map(
                  (item): JSX.Element => (
                    <CityCard
                      src={item.previewImage}
                      title={item.title}
                      price={item.price}
                      type={item.type}
                      key={item.id}
                      id={item.id}
                      isPremium={item.isPremium}
                      rating={item.rating}
                      width={CardCityCharacter.WidthOffer}
                      height={CardCityCharacter.HeightOffer}
                      classCard={CardCityCharacter.ClassCitiesCard}
                      classImageWrapper={
                        CardCityCharacter.ClassCitiesImageWrapper
                      }
                    />
                  )
                )}
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                points={POINTS}
                location={ActiveCityMap.Amsterdam.location}
                block="cities"
                selectedPoint={undefined}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SixCitiesMainPage;
