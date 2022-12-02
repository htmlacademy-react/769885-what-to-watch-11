import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, findFilms, findNextFilms, findResetFilms} from './action';
import {films} from '../mocks/films';
import {DEFAULT_GENRE, TOTAL_FILMS_SHOW_MORE} from '../const';

const initialState = {
  genre: DEFAULT_GENRE,
  films: films,
  filmsTotalView: TOTAL_FILMS_SHOW_MORE
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(findFilms , (state, action) => {
      state.films = action.payload;
    })
    .addCase(findNextFilms, (state) => {
      state.filmsTotalView += TOTAL_FILMS_SHOW_MORE;
    })
    .addCase(findResetFilms, (state) => {
      state.filmsTotalView = TOTAL_FILMS_SHOW_MORE;
    });
});

export { reducer };
