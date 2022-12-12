import {createAction} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {AppRoute, AuthorizationStatus} from '../const';
import {Comments} from '../types/comment';
export const changeGenre = createAction('films/changeGenre', (genre: string) => ({
  payload: genre
}));

export const findFilms = createAction('films/findFilms', (films: Films) => ({
  payload: films
}));

export const findFilm = createAction('film/findFilm', (film: Film) => ({
  payload: film
}));

export const findSimilarFilms = createAction<Films>('films/findSimilarFilms');

export const findFilmComments = createAction<Comments>('films/findFilmComments');

export const findNextFilms = createAction('films/findNextFilms');

export const findResetFilms = createAction('films/findResetFilms');

export const errorMessage = createAction<string | null>('app/errorMessage');

export const isLoadingFilms = createAction<boolean>('films/isLoadingFilms');

export const isLoadingFilm = createAction<boolean>('films/isLoadingFilm');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

export const isBlockedFormComments = createAction<boolean>('form/isBlockedFormComments');
