import {createAction} from '@reduxjs/toolkit';
import {Films} from '../types/film';

export const changeGenre = createAction('films/changeGenre', (genre: string) => ({
  payload: genre
}));

export const findFilms = createAction('films/findFilms', (films: Films) => ({
  payload: films
}));
