export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CardCityCharacter {
  WidthOffer = '260',
  HeightOffer = '200',
  WidthFavorites = '150',
  HeightFavorites = '110',
  ClassCitiesCard = 'cities__card',
  ClassFavoritesCard = 'favorites__card',
  ClassCitiesImageWrapper = 'cities__image-wrapper',
  ClassFavoritesImageWrapper = 'favorites__image-wrapper',
  ClassNearCard = 'near-places__card',
  ClassNearImageWrapper = 'near-places__image-wrapper',
}

export const MIN_COMMENT_LENGTH = 50;
export const MAX_COMMENT_LENGTH = 260;
export const COUNTER_OFFERS = 200;

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type City = {
  location: LocationType;
  name: string;
};

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
export const COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
