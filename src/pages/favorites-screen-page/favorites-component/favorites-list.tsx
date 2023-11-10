import CityCard from '../../../components/city-card/city-card';
import { CardCityCharacter } from '../../../const';
import { AppCityProp } from '../../../type/offer.type';

type FavoritesListProp = {
  cityData: AppCityProp[];
};

function FavoritesList({ cityData }: FavoritesListProp): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>Amsterdam</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cityData.map(
          (item): JSX.Element => (
            <CityCard
              src={item.previewImage}
              title={item.title}
              price={item.price}
              type={item.type}
              key={item.id}
              id={item.id}
              width={CardCityCharacter.WidthOffer}
              height={CardCityCharacter.HeightOffer}
              classCard={CardCityCharacter.ClassCitiesCard}
              classImageWrapper={CardCityCharacter.ClassCitiesImageWrapper}
              isPremium={item.isPremium}
            />
          )
        )}
      </div>
    </li>
  );
}

export default FavoritesList;
