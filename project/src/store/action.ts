import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/film';

export const changeGenre = createAction('films/changeGenre', (genre: string) => ({
  payload: genre
}));

export const findFilms = createAction('films/findFilms', (films: Films) => ({
  payload: films
}));

export const findNextFilms = createAction('films/findNextFilms');

export const findResetFilms = createAction('films/findResetFilms');
