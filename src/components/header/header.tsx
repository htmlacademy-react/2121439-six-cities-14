import Logo from './logo';
import HeaderUserLogin from './header-user-login';
import { AuthorizationStatus } from '../../const';

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <HeaderUserLogin authorizationStatus={AuthorizationStatus.NoAuth} />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
