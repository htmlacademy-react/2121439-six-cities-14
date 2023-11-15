import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';
import '../not-found-page/not-found-page.css';
import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
function NotFoundPage(): JSX.Element {
  return (
    // <section className="content">
    //   <Helmet>
    //     <title>6 Cities. Page not found</title>
    //   </Helmet>
    //   <h1 className="heading">
    //     Erorr 404
    //     <br />
    //     <small>Page not found</small>
    //   </h1>
    //   <br />
    //   <Link to="/" className="link">
    //     Back to home page
    //   </Link>
    // </section>
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities. Login page</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <Helmet>
              <title>6 Cities. Page not found</title>
            </Helmet>

            <h1 className="heading">
              Error 404 <br />
              <small>Page not found</small>
            </h1>
            <br />

            <Link to="/" className="link">
              Back to home page
            </Link>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRoute.Main} className="locations__item-link">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
