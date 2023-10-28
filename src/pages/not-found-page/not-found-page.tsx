import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../not-found-page/not-found-page.css';
function NotFoundPage(): JSX.Element {
  return (
    <section className="content">
      <Helmet>
        <title>6 Cities. Page not found</title>
      </Helmet>
      <h1 className="heading">
        Erorr 404
        <br />
        <small>Page not found</small>
      </h1>
      <br />
      <Link to="/" className="link">
        Back to home page
      </Link>
    </section>
  );
}

export default NotFoundPage;
