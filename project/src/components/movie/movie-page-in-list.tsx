import {Film} from '../../types/film';

type MovieInListPropsType = {
  film: Film;
}

function MoviePageInList({film}:MovieInListPropsType): JSX.Element {
  const bad = {
    from: 0,
    to: 3
  };
  const mediocre = {
    from: 3,
    to: 5
  };
  const good = {
    from: 5,
    to: 8
  };
  const veryGood = {
    from: 8,
    to: 10
  };
  const awesome = {
    to: 10
  };
  const definedRating = (rating: number) => {
    if (rating >= bad.from && rating < bad.to) {
      return 'Bad';
    }
    if (rating >= mediocre.from && rating < mediocre.to) {
      return 'Mediocre';
    }
    if (rating >= good.from && rating < good.to) {
      return 'Good';
    }
    if (rating >= veryGood.from && rating < veryGood.to) {
      return 'Very good';
    }
    if (rating === awesome.to) {
      return 'Awesome';
    }
    return 'NaN';
  };
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{definedRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring} and other</strong>
        </p>
      </div>
    </>
  );
}

export default MoviePageInList;
