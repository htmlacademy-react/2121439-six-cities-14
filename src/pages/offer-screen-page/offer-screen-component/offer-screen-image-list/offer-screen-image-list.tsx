type SrcImage = {
  src: string;
};

function OfferScreenImageList({ src }: SrcImage): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={src} />
    </div>
  );
}

export default OfferScreenImageList;
