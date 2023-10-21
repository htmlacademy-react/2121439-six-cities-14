interface OfferRaitingData {
  value: number;
  id: string;
  forForm: string;
  title: string;
}

const OfferScreenRaitingReviewData: OfferRaitingData[] = [
  {
    value: 5,
    id: '5-stars',
    forForm: '5-stars',
    title: 'perfect',
  },
  {
    value: 4,
    id: '4-stars',
    forForm: '4-stars',
    title: 'good',
  },
  {
    value: 3,
    id: '3-stars',
    forForm: '3-stars',
    title: 'not bad',
  },
  {
    value: 2,
    id: '2-stars',
    forForm: '2-stars',
    title: 'badly',
  },
  {
    value: 1,
    id: '1-stars',
    forForm: '1-stars',
    title: 'terribly',
  },
];

export default OfferScreenRaitingReviewData;
