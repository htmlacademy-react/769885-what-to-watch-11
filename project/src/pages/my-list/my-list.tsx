import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import ListFilms from '../../components/list-films/list-films';
import {Films} from '../../types/film';

type MyListFilmsPropsType = {
  myListFilms: Films;
}

function MyList({myListFilms}: MyListFilmsPropsType): JSX.Element {
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW | My list</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{myListFilms.length}</span></h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <ListFilms films={myListFilms} />
      </section>

      <footer className="page-footer">
        <Logo footer />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
