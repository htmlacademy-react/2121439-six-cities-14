import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../../../const';
import './city-location-list.css';

type CityName = {
  name: string;
};

function CityLocationList({ name }: CityName) {
  const activeCity = 'Amsterdam';
  return (
    <li className="locations__item">
      {activeCity === name ? (
        <NavLink to={AppRoute.Main} className="locations__item-link tabs__item">
          <span>{name}</span>
        </NavLink>
      ) : (
        <NavLink to={'*'} className="locations__item-link tabs__item">
          <span>{name}</span>
        </NavLink>
      )}
    </li>
  );
}

export default CityLocationList;
