import { Helmet } from 'react-helmet-async';
import { useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Film, Films} from '../../types/film';
import Logo from '../../components/logo/logo';
import FormSendComments from '../../components/form-send-comments/form-send-comments';
import NotFount from '../not-fount/not-fount';

type AddReviewPropsType = {
  films: Films;
}

function AddReview({films}: AddReviewPropsType) {
  const params = useParams();
  const film = films.find((elem: Film) => elem.id.toString() === params.id);
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

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218"
            height="327"
          />
        </div>
      </div>

      <FormSendComments film={film} />

    </section>
  );
}

export default AddReview;
