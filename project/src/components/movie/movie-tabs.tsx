import {useAppSelector} from '../../hooks';
import {Film} from '../../types/film';
import {tabsDescriptionsFilms} from '../../const';
import {useState} from 'react';
import MoviePageInList from './movie-page-in-list';
import MoviePageDetails from './movie-page-details';
import MoviePageReviews from './movie-page-reviews';
import {Link} from 'react-router-dom';

type MovieTabsPropsType = {
  film: Film;
}

function MovieTabs({film}: MovieTabsPropsType): JSX.Element {
  const comments = useAppSelector((state) => state.currentFilmComments);
  const [activeTab, setActiveTab] = useState<number>(tabsDescriptionsFilms.Overview);
  const definedActiveTab = () => {
    switch (activeTab) {
      case tabsDescriptionsFilms.Overview:
        return <MoviePageInList film={film} />;
      case tabsDescriptionsFilms.Details:
        return <MoviePageDetails film={film} />;
      case tabsDescriptionsFilms.Reviews:
        return <MoviePageReviews comments={comments} />;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === tabsDescriptionsFilms.Overview ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(tabsDescriptionsFilms.Overview)}>
            <Link to="#" className="film-nav__link">Overview</Link>
          </li>
          <li className={`film-nav__item ${activeTab === tabsDescriptionsFilms.Details ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(tabsDescriptionsFilms.Details)}>
            <Link to="#" className="film-nav__link">Details</Link>
          </li>
          <li className={`film-nav__item ${activeTab === tabsDescriptionsFilms.Reviews ? 'film-nav__item--active' : ''}`} onClick={() => setActiveTab(tabsDescriptionsFilms.Reviews)}>
            <Link to="#" className="film-nav__link">Reviews</Link>
          </li>
        </ul>
      </nav>

      {definedActiveTab()}

    </div>
  );
}

export default MovieTabs;
