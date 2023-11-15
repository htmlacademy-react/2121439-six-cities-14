import OfferHostUserComment from './offer-host-user-comment';
import { Host } from '../../../../const';

function OfferHostUser({ id, isPro, avatarUrl, name }: Host): JSX.Element {
  return (
    <>
      <div className="offer__host-user user">
        <div
          className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper"
          id={`${id}`}
        >
          <img
            className="offer__avatar user__avatar"
            src={avatarUrl}
            width="74"
            height="74"
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{name}</span>
        <span className="offer__user-status">{isPro ? 'Pro' : ''}</span>
      </div>
      <div className="offer__description">
        <OfferHostUserComment
          description="A quiet cozy and picturesque that hides behind a a river by the unique
          lightness of Amsterdam. The building is green and from 18th century."
          key={1223}
        />
        <OfferHostUserComment
          description="An independent House, strategically located between Rembrand Square
          and National Opera, but where the bustle of the city comes to rest in
          this alley flowery and colorful."
          key={1225}
        />
      </div>
    </>
  );
}

export default OfferHostUser;
