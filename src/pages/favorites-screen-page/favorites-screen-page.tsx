import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import FavoritesList from './favorites-component/favorites-list';
import { AppCityProp } from '../../type/offer.type';

type FavoritesProp = {
  cityData: AppCityProp[];
};

function FavoritesScreenPage({ cityData }: FavoritesProp): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Favorites </title>
      </Helmet>
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesList cityData={cityData} />
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreenPage;
