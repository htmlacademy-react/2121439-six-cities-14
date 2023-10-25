import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';

type HeaderUserProps = {
  authorizationStatus: AuthorizationStatus;
};

function HeaderUserLogin({
  authorizationStatus,
}: HeaderUserProps): JSX.Element {
  return (
    <ul className="header__nav-list">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                Oliver.conner@gmail.com
              </span>
              <span className="header__favorite-count">3</span>
            </a>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to={AppRoute.Login}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </>
      ) : (
        <>
          <li className="header__nav-item user">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          </li>
          <li className="header__nav-item">
            <Link to={AppRoute.Login} className="header__nav-link">
              <span className="header__signout">Sign in</span>
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}

export default HeaderUserLogin;
