import { ChangeEvent, useState } from 'react';
import { formInputValues } from '../../mocks/form-data';

function Form(): JSX.Element {
  const [textarea, setTextarea] = useState('');
  const [rating, setRating] = useState<string>('');
  const isDone: boolean =
    textarea.length >= 50 && textarea.length <= 260 && rating !== '';

  function handleChangeTextarea(evt: ChangeEvent<HTMLTextAreaElement>) {
    const target = evt.target.value;
    setTextarea(target);
  }

  function handleInputChange(evt: ChangeEvent<HTMLInputElement>) {
    setRating(evt.target.value);
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {formInputValues.map((item) => (
          <>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={item.title}
              id={`${item.id}-stars`}
              type="radio"
              key={item.id}
              onChange={handleInputChange}
            />
            <label
              htmlFor={`${item.id}-stars`}
              className="reviews__rating-label form__rating-label"
              title={item.title}
              key={item.id}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={textarea}
        onChange={handleChangeTextarea}
      >
        {' '}
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isDone}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
