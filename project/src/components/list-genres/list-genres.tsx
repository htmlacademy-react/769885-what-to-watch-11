import {Link} from 'react-router-dom';
import { MouseEvent } from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeGenre} from '../../store/action';

type ListGenrePropsType = {
  genres: string[];
}

function ListGenres({genres}: ListGenrePropsType): JSX.Element {
  const dispatch = useAppDispatch();
  const activeGenre = useAppSelector((state) => state.genre);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`}>
          <Link to="#" className="catalog__genres-link" onClick={(evt: MouseEvent) => {
            evt.preventDefault();
            dispatch(changeGenre(genre));}}
          >{genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default ListGenres;
