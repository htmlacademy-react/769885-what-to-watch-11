import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFount(): JSX.Element {
  return (
    <>
      <h1>404. Page not found</h1>
      <Link to={AppRoute.Main}>Back to main</Link>
    </>
  );
}

export default NotFount;
