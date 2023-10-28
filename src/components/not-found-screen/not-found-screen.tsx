import { Link } from 'react-router-dom';
import Header from '../header/header';

function NotFoundScreen(): JSX.Element {
  return (
    <section>
      <Header />
      <h1>
        Error 404
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Back to home page</Link>
    </section>
  );
}

export default NotFoundScreen;
