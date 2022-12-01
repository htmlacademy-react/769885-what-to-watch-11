import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, findFilms} from './action';
import {films} from '../mocks/films';
import {DEFAULT_GENRE} from '../const';

const initialState = {
  genre: DEFAULT_GENRE,
  films: films
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(findFilms , (state, action) => {
      state.films = action.payload;
    });
});

export { reducer };
