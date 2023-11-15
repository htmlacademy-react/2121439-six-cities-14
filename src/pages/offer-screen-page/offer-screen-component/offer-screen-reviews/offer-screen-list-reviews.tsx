type OfferScreenReviewsProps = {
  user: {
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  rating: number;
  comment: string;
  date: string;
};

function OfferScreenListReviews({
  user,
  rating,
  comment,
  date,
}: OfferScreenReviewsProps): JSX.Element {
  const ratingStarPercentage: number = (rating / 6) * 100;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${ratingStarPercentage}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>
          {date}
        </time>
      </div>
    </li>
  );
}

export default OfferScreenListReviews;
