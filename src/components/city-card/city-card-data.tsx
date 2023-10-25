import { v4 as uuidv4 } from 'uuid';

interface DataCardCity {
  src: string;
  title: string;
  price: number;
  id: string;
}

const DataCardCityArr: DataCardCity[] = [
  {
    src: 'https://14.react.pages.academy/static/offer/16.jpg',
    title: 'Beautiful &amp; luxurious apartment at great location',
    price: 120,
    id: `${uuidv4()}`,
  },
  {
    src: 'https://14.react.pages.academy/static/offer/13.jpg',
    title: 'Beautiful &amp; luxurious apartment at great location',
    price: 125,
    id: `${uuidv4()}`,
  },
  {
    src: 'https://14.react.pages.academy/static/offer/6.jpg',
    title: 'Beautiful &amp; luxurious apartment at great location',
    price: 130,
    id: `${uuidv4()}`,
  },
  {
    src: 'https://14.react.pages.academy/static/offer/11.jpg',
    title: 'Beautiful &amp; luxurious apartment at great location',
    price: 140,
    id: `${uuidv4()}`,
  },
  {
    src: 'https://14.react.pages.academy/static/offer/14.jpg',
    title: 'Beautiful &amp; luxurious apartment at great location',
    price: 160,
    id: `${uuidv4()}`,
  },
];

export default DataCardCityArr;
