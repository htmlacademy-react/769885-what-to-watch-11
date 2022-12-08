import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeGenre = createAction('films/changeGenre', (genre: string) => ({
  payload: genre
}));

export const findFilms = createAction('films/findFilms', (films: Films) => ({
  payload: films
}));

export const findNextFilms = createAction('films/findNextFilms');

export const findResetFilms = createAction('films/findResetFilms');

export const errorMessage = createAction<string | null>('app/errorMessage');

export const isLoadingFilms = createAction<boolean>('films/isLoadingFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');

