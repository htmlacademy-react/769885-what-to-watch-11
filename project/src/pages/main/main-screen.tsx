import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useLocation} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import ListFilms from '../../components/list-films/list-films';
import {Film, Films} from '../../types/film';
import ListGenres from '../../components/list-genres/list-genres';
import {DEFAULT_GENRE} from '../../const';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import {findNextFilms, findResetFilms} from '../../store/action';

type MainScreenProps = {
  filmPromo: Film;
  films: Films;
}

function MainScreen({filmPromo, films}: MainScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(findResetFilms());
  },[location, dispatch]);
  const getListGenres = (fs: Films): string[] => {
    const gen = new Set(fs.map((f) => f.genre));
    return [DEFAULT_GENRE as string, ...gen];
  };
  const getFilterFilms = (fs: Films, g: string) => {
    if (g === DEFAULT_GENRE) {
      return fs;
    } else {
      return fs.filter((f) => f.genre === g);
    }
  };
  const updateListFindFilms = useAppSelector((state) => state.filmsTotalView);
  const findSelectedFilms = useAppSelector((state) => getFilterFilms(state.films, state.genre));
  const findSelectedFilmsUpdate = useAppSelector((state) => getFilterFilms(state.films, state.genre)).slice(0, updateListFindFilms);
  const genres = getListGenres(films);

  return (
    <>
      <section className="film-card">
        <Helmet>
          <title>WTW | Main screen</title>
        </Helmet>
        <div className="film-card__bg">
          <img src={filmPromo.backgroundImage} alt={filmPromo.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={filmPromo.posterImage} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmPromo.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmPromo.genre}</span>
                <span className="film-card__year">{filmPromo.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">{films.length}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ListGenres genres={genres} />

          <ListFilms films={findSelectedFilmsUpdate} />

          { findSelectedFilms.length > findSelectedFilmsUpdate.length ? <ShowMoreButton onClick={() => dispatch(findNextFilms())} /> : null}
        </section>

        <footer className="page-footer">
          <Logo footer />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainScreen;
