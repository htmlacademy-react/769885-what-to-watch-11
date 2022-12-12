import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Logo from '../../components/logo/logo';
import FormSendComments from '../../components/form-send-comments/form-send-comments';
import NotFount from '../not-fount/not-fount';
import UserBlockAuth from '../../components/user-block-auth/user-block-auth';
import {useAppSelector} from '../../hooks';

function AddReview() {
  const film = useAppSelector((state) => state.film);
  if (film === undefined) {
    return <NotFount />;
  }
  return (
    <section className="film-card film-card--full">
      <Helmet>
        <title>WTW | Add review</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Film}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlockAuth />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218"
            height="327"
          />
        </div>
      </div>

      <FormSendComments />

    </section>
  );
}

export default AddReview;
