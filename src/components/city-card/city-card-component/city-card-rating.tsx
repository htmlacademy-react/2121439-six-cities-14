type CardRatingProps = {
  rating: number;
};

function CityCardRating({ rating }: CardRatingProps): JSX.Element {
  return (
    <div className="place-card__stars rating__stars">
      <span style={{ width: `${rating}%` }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default CityCardRating;
