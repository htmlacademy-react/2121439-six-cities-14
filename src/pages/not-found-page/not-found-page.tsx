import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <section>
      <Helmet>
        <title>6 Cities. Page not found</title>
      </Helmet>
      <h1>
        Erorr 404
        <br />
        <small>Page not found</small>
      </h1>
      <br />
      <a href="#">Back to home page</a>
    </section>
  );
}

export default NotFoundPage;
