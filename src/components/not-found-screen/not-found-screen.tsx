import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <section>
      <h1>
        Erorr 404
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Back to home page</Link>
    </section>
  );
}

export default NotFoundScreen;
