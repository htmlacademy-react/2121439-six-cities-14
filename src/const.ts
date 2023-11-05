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
