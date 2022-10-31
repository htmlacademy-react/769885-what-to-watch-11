import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {AppRoute} from '../../const';

function NotFount(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>WTW | 404</title>
      </Helmet>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Back to main</Link>
    </>
  );
}

export default NotFount;
