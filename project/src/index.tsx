import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {getFilms} from './store/api-actions';
import {Provider} from 'react-redux';
import {store} from './store/index';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(getFilms());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ErrorMessage />
      <App />
    </React.StrictMode>
  </Provider>
);
