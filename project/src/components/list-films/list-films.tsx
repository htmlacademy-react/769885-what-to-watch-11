import {useState, BaseSyntheticEvent} from 'react';
import CardFilms from '../card-films/card-films';
import {Films, Film} from '../../types/film';

type ListFilmsProps = {
  films: Films;
}

function ListFilms(props: ListFilmsProps): JSX.Element {
  const {films} = props;
  const [activeFilmId, setActiveFilmId] = useState<string | null>(null);

  const handleMouseOver = (evt: BaseSyntheticEvent) => {
    const target = evt.target as Element;
    const parentEl = target.parentElement as Element;

    if (parentEl.classList.contains('small-film-card')) {
      setActiveFilmId(parentEl.id);
    } else {
      setActiveFilmId(null);
    }
  };
  return (
    <div className="catalog__films-list" onMouseOver={handleMouseOver} onMouseOut={() => setActiveFilmId(null)}>
      {films.map((f: Film) => <CardFilms film={f} key={f.id} isActiveAutoPlay={f.id.toString() === activeFilmId}/>)}
    </div>
  );
}

export default ListFilms;
