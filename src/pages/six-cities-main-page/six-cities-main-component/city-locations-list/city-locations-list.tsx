type CityName = {
  name: string;
};

function CityLocationsList({ name }: CityName) {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{name}</span>
      </a>
    </li>
  );
}

export default CityLocationsList;
