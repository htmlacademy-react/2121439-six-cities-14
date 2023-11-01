function CityCardRating(): JSX.Element {
  return (
    <div className="place-card__stars rating__stars">
      <span style={{ width: '80%' }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

export default CityCardRating;
