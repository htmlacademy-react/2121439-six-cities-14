type SrcImageProps = {
  src: string;
};

function OfferScreenImageList({ src }: SrcImageProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={src} />
    </div>
  );
}

export default OfferScreenImageList;
