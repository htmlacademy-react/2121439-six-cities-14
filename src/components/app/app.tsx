import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Импорт pages для роутера
import SixCitiesScreen from '../../pages/six-cities-main-page/six-citites-screen-page';
import LoginScreenPage from '../../pages/login-screen-page/login-screen-page';
import OfferScreenPage from '../../pages/offer-screen-page/offer-screen-page';
import FavoritesScreenPage from '../../pages/favorites-screen-page/favorites-screen-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<SixCitiesScreen countOffer={200} />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreenPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginScreenPage />} />
        <Route path={AppRoute.Offer} element={<OfferScreenPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
