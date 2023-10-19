type OfferHostUserProps = {
  description: string;
};

function OfferHostUserComment({
  description,
}: OfferHostUserProps): JSX.Element {
  return <p className="offer__text">{description}</p>;
}

export default OfferHostUserComment;
