import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { cityData } from './mocks/offer/city-data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App dataCity={cityData} />
  </React.StrictMode>
);
