type CardPremiumProps = {
  premium: boolean;
  className: string;
};

function CityCardPremium({
  premium,
  className,
}: CardPremiumProps): JSX.Element {
  return premium ? (
    <div className={`${className}__mark`}>{premium ? 'Premium' : ''}</div>
  ) : (
    <div className="place-card__mark visually-hidden"></div>
  );
}

export default CityCardPremium;
