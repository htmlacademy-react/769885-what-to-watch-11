import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import NotFount from '../../pages/not-fount/not-fount';
import MainScreen from '../../pages/main/main-screen';
import SingIn from '../../pages/sing-in/sing-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import Player from '../../pages/player/player';
import AddReview from '../../pages/add-review/add-review';

type AppDataFilmsPromoProps = {
  title: string;
  genre: string;
  year: number;
}

function App({title, genre, year}: AppDataFilmsPromoProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen title={title} genre={genre} year={year} />}
        />
        <Route
          path={AppRoute.SingIn}
          element={<SingIn />}
        />
        <Route
          path={AppRoute.MyList}
          element={<MyList />}
        />
        <Route path={`${AppRoute.Film}/:id`}>
          <Route index element={<MoviePage />}/>
          <Route path={ AppRoute.AddReview} element={<AddReview />} />
        </Route>
        <Route path={`${AppRoute.Player}/:id`} element={<Player />}/>
        <Route
          path="*"
          element={<NotFount />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
