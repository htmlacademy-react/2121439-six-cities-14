type RatingProps = {
  value: number;
  id: string;
  forForm: string;
  title: string;
};

function OfferScreenRaitingReview({
  value,
  id,
  forForm,
  title,
}: RatingProps): JSX.Element {
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={id}
        type="radio"
      />
      <label
        htmlFor={forForm}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default OfferScreenRaitingReview;
