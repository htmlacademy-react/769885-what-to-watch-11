export enum AppRoute {
  Main = '/',
  SingIn = 'login',
  MyList = 'myList',
  Film = 'films',
  Player = 'player',
  AddReview = 'review'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum tabsDescriptionsFilms {
  Overview = 1,
  Details = 2,
  Reviews = 3
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export const DEFAULT_GENRE = 'All genres';

export const TOTAL_FILMS_SHOW_MORE = 8;

export const TIMEOUT_DELETE_ERROR_MESSAGE = 3000;
