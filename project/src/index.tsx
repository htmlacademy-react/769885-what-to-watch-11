import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {comments} from './mocks/comments';
import {Film, Films} from './types/film';
import {Comments} from './types/comment';
import {Provider} from 'react-redux';
import {store} from './store/index';

export type DataType = {
  films: Films;
  myListFilms: Films;
  comments: Comments;
  filmPromo: Film;
}

const Data: DataType = {
  films: films,
  myListFilms: films,
  comments: comments,
  filmPromo: films[7]
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App
        films = {Data.films}
        myListFilms = {Data.myListFilms}
        comments = {Data.comments}
        filmPromo = {Data.filmPromo}
      />
    </React.StrictMode>
  </Provider>
);
