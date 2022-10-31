import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Film} from '../../types/film';

type CardFilmProps = {
  film: Film;
}

function CardFilms(props: CardFilmProps): JSX.Element {
  const { film } = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={film.previewImage}
          alt={film.name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${AppRoute.Film}/${film.id}`}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default CardFilms;
