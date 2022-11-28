import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Film} from '../../types/film';
import VideoPlayer from '../video-player/video-player';

type CardFilmProps = {
  film: Film;
  isActiveAutoPlay: boolean;
}

function CardFilms({film, isActiveAutoPlay}: CardFilmProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card" id={film.id.toString()}>
      <div className="small-film-card__image">
        {
          isActiveAutoPlay ?
            <VideoPlayer film={film} isMuted isAutoPlay/> :
            <img
              src={film.previewImage}
              alt={film.name}
              width="280"
              height="175"
            />
        }
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
