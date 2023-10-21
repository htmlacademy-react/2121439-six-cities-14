import SixCitiesScreen from '../../pages/six-cities-main-page/six-citites-screen-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//Импорт pages для роутера
import LoginScreenPage from '../../pages/login-screen-page/login-screen-page';
import OfferScreenPage from '../../pages/offer-screen-page/offer-screen-page';
import FavoritesScreenPage from '../../pages/favorites-screen-page/favorites-screen-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SixCitiesScreen countOffer={200} />} />
        <Route path="/login" element={<LoginScreenPage />} />
        <Route path="/offer/:id" element={<OfferScreenPage />} />
        <Route path="/favorites" element={<FavoritesScreenPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
