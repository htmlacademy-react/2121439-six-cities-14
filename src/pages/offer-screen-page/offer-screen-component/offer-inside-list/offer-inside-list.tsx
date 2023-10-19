type OfferInsideListProps = {
  title: string;
};

function OfferInsideList({ title }: OfferInsideListProps): JSX.Element {
  return <li className="offer__inside-item">{title}</li>;
}

export default OfferInsideList;
