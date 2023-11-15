import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SixCitiesMainPage from '../../pages/six-cities-screen-page/six-cities-main-page';
import LoginScreenPage from '../../pages/login-screen-page/login-screen-page';
import OfferScreenPage from '../../pages/offer-screen-page/offer-screen-page';
import FavoritesScreenPage from '../../pages/favorites-screen-page/favorites-screen-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppCityProp } from '../../type/offer.type';
import { COUNTER_OFFERS } from '../../const';
import { AppRoute, AuthorizationStatus } from '../../const';

type AppProps = {
  dataCity: AppCityProp[];
};

function App({ dataCity }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={
              <SixCitiesMainPage
                countOffer={COUNTER_OFFERS}
                cityData={dataCity}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <FavoritesScreenPage cityData={dataCity} />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Login} element={<LoginScreenPage />} />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreenPage dataCity={dataCity} />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
