import Header from '../../components/header/header';
import CityCard from '../../components/city-card/city-card';
import DataCardCityArr from '../../components/city-card/city-card-data';
import CityLocationsList from './six-cities-main-component/city-locations-list/city-locations-list';
import CityLocationsArr from './six-cities-main-component/city-locations-list/city-locations-data';
import { v4 as uuidv4 } from 'uuid';

type CountPlaces = {
  countOffer: number;
};

function SixCitiesScreen({ countOffer }: CountPlaces): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CityLocationsArr.map(
                (cityName): JSX.Element => (
                  <CityLocationsList name={cityName} key={uuidv4()} />
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

              {/* City card */}
              <div className="cities__places-list places__list tabs__content">
                {DataCardCityArr.map(
                  (item): JSX.Element => (
                    <CityCard
                      src={item.src}
                      title={item.title}
                      price={item.price}
                      key={item.key}
                    />
                  )
                )}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SixCitiesScreen;