import {createReducer} from '@reduxjs/toolkit';
import {Films} from '../types/film';
import {
  changeGenre,
  errorMessage,
  findFilms,
  findNextFilms,
  findResetFilms,
  isLoadingFilms,
  requireAuthorization
} from './action';
import {AuthorizationStatus, DEFAULT_GENRE, TOTAL_FILMS_SHOW_MORE} from '../const';

type InitialState = {
  genre: string;
  films: Films;
  filmsTotalView: number;
  isLoadedFilms: boolean;
  errorMessage: string | null;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  genre: DEFAULT_GENRE,
  films: [],
  filmsTotalView: TOTAL_FILMS_SHOW_MORE,
  isLoadedFilms: false,
  errorMessage: null,
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(errorMessage, (state, action) => {
      state.errorMessage = action.payload;
    })
    .addCase(isLoadingFilms, (state, action) => {
      state.isLoadedFilms = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
