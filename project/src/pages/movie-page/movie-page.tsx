import { Helmet } from 'react-helmet-async';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Logo from '../../components/logo/logo';
import NotFount from '../not-fount/not-fount';
import {Film, Films} from '../../types/film';
import {AppRoute} from '../../const';
import ListFilms from '../../components/list-films/list-films';
import MovieTabs from '../../components/movie/movie-tabs';
import UserBlockAuth from '../../components/user-block-auth/user-block-auth';

type MoviePagePropsType = {
  films: Films;
}

function MoviePage(props: MoviePagePropsType): JSX.Element {
  const {films} = props;
  const params = useParams();
  const similarFilms = films.slice(0, 4);
  const film: Film | undefined = films.find((f ) => f.id.toString() === params.id);
  if (film === undefined) {
    return <NotFount/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <Helmet>
          <title>WTW | Films pages</title>
        </Helmet>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlockAuth />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
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
                <Link to={`${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218"
                height="327"
              />
            </div>

            <MovieTabs film={film}/>

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <ListFilms films={similarFilms}/>
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

export default MoviePage;
