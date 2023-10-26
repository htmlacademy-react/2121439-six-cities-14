type OfferScreenReviewsProps = {
  avatar: string;
  userName: string;
  reviewsText: string;
  reviewsDate: string;
};

function OfferScreenListReviews({
  avatar,
  userName,
  reviewsText,
  reviewsDate,
}: OfferScreenReviewsProps): JSX.Element {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={avatar}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{reviewsText}</p>
        <time className="reviews__time" dateTime={reviewsDate}>
          {reviewsDate}
        </time>
      </div>
    </li>
  );
}

export default OfferScreenListReviews;