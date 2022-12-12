import {createReducer} from '@reduxjs/toolkit';
import {Film, Films} from '../types/film';
import {
  changeGenre,
  errorMessage, findFilm, findFilmComments,
  findFilms,
  findNextFilms,
  findResetFilms, findSimilarFilms, isBlockedFormComments,
  isLoadingFilms,
  requireAuthorization
} from './action';
import {AuthorizationStatus, DEFAULT_GENRE, TOTAL_FILMS_SHOW_MORE} from '../const';
import {Comments} from '../types/comment';

type InitialState = {
  genre: string;
  films: Films;
  film: Film;
  similarFilms: Films;
  currentFilmComments: Comments;
  filmsTotalView: number;
  isLoadedFilms: boolean;
  isLoadedFilm: boolean;
  errorMessage: string | null;
  authorizationStatus: AuthorizationStatus;
  isBlockedFormAddComments: boolean;
}

const initialState: InitialState = {
  genre: DEFAULT_GENRE,
  films: [],
  film: {} as Film,
  similarFilms: [],
  currentFilmComments: [],
  filmsTotalView: TOTAL_FILMS_SHOW_MORE,
  isLoadedFilms: false,
  isLoadedFilm: false,
  errorMessage: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isBlockedFormAddComments: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(findFilms , (state, action) => {
      state.films = action.payload;
    })
    .addCase(findFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(findFilmComments, (state, action) => {
      state.currentFilmComments = action.payload;
    })
    .addCase(findSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
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
    })
    .addCase(isBlockedFormComments, (state, action) => {
      state.isBlockedFormAddComments = action.payload;
    });
});

export { reducer };
