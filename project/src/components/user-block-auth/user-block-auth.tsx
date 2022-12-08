import {Link} from 'react-router-dom';
import {BaseSyntheticEvent} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logout} from '../../store/api-actions';

function UserBlockAuth():JSX.Element {
  const dispatch = useAppDispatch();
  const isAuthorization = useAppSelector((state) => state.authorizationStatus);

  const handleLogout = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    dispatch(logout());
  };

  if (isAuthorization === AuthorizationStatus.Auth) {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </li>
        <li className="user-block__item">
          <Link
            to='/'
            onClick={handleLogout}
            className="user-block__link"
          >Sign out
          </Link>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="user-block">
        <li className="user-block__item">
          <Link to={AppRoute.SingIn} className="user-block__link">Sign in</Link>
        </li>
      </ul>
    );
  }


}

export default UserBlockAuth;
