import OfferHostUserComment from './offer-host-user-comment';

type OfferUserProps = {
  name: string;
  status: string;
};

function OfferHostUser({ name, status }: OfferUserProps): JSX.Element {
  return (
    <>
      <div className="offer__host-user user">
        <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
          <img
            className="offer__avatar user__avatar"
            src="img/avatar-angelina.jpg"
            width="74"
            height="74"
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{name}</span>
        <span className="offer__user-status">{status}</span>
      </div>
      <div className="offer__description">
        <OfferHostUserComment
          description="A quiet cozy and picturesque that hides behind a a river by the unique
          lightness of Amsterdam. The building is green and from 18th century."
        />
        <OfferHostUserComment
          description="An independent House, strategically located between Rembrand Square
          and National Opera, but where the bustle of the city comes to rest in
          this alley flowery and colorful."
        />
      </div>
    </>
  );
}

export default OfferHostUser;
