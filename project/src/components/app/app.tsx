import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import NotFount from '../../pages/not-fount/not-fount';
import MainScreen from '../../pages/main/main-screen';
import SingIn from '../../pages/sing-in/sing-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';
import PrivateRoute from '../private-route/private-route';
import {Film, Films} from '../../types/film';
import {Comments} from '../../types/comment';

type AppDataPropsType = {
  films: Films;
  myListFilms: Films;
  comments: Comments;
  filmPromo: Film;
}

function App({films, myListFilms, comments, filmPromo}: AppDataPropsType): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={ <MainScreen filmPromo={filmPromo} films={films} /> } />
          <Route path={AppRoute.SingIn} element={ <SingIn /> } />
          <Route path={AppRoute.MyList} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList myListFilms={myListFilms} />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Film}/:id`} element={ <MoviePage films={films} /> }/>
          <Route path={`${AppRoute.Film}/:id/${AppRoute.AddReview}`} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <AddReview films={films} />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Player}/:id`} element={ <Player films={films} /> } />
          <Route path="*" element={ <NotFount /> } />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
