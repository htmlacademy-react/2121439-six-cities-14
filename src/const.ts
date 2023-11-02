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
  widthOffer = '260',
  heightOffer = '200',
  widthFavorites = '150',
  heightFavorites = '110',
  classCitiesCard = 'cities__card',
  classFavoritesCard = 'favorites__card',
  classCitiesImageWrapper = 'cities__image-wrapper',
  classFavoritesImageWrapper = 'favorites__image-wrapper',
  classNearCard = 'near-places__card',
  classNearImageWrapper = 'near-places__image-wrapper',
}
