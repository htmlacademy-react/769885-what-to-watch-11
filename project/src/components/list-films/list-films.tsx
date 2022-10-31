import CardFilms from '../card-films/card-films';
import {Films} from '../../types/film';

type ListFilmsProps = {
  films: Films;
}

function ListFilms(props: ListFilmsProps): JSX.Element {
  const {films} = props;
  return (
    <div className="catalog__films-list">
      {films.map((f) => <CardFilms film={f} key={f.id}/>)}
    </div>
  );
}

export default ListFilms;
