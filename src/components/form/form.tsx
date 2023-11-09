import { ChangeEvent, useState } from 'react';
import { v4 as uuid4 } from 'uuid';

import { formInputValues } from '../../mocks/form-data';
import { MIN_COMMENT_LENGTH } from '../../const';
import { MAX_COMMENT_LENGTH } from '../../const';
import React from 'react';

function Form(): JSX.Element {
  const [textarea, setTextarea] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const isDone: boolean =
    textarea.length >= MIN_COMMENT_LENGTH &&
    textarea.length <= MAX_COMMENT_LENGTH &&
    rating !== '';

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
          <React.Fragment key={uuid4()}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={item.title}
              id={`${item.id}-stars`}
              type="radio"
              onChange={handleInputChange}
              key={item.id}
            />
            <label
              htmlFor={`${item.id}-stars`}
              className="reviews__rating-label form__rating-label"
              title={item.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={textarea}
        onChange={handleChangeTextarea}
        key="review"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
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
