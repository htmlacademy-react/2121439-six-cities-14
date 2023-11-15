interface offerScreenReviewUser {
  id: number;
  user: {
    id: number;
    isPro: false;
    name: string;
    avatarUrl: string;
  };
  rating: 4;
  comment: string;
  date: string;
}

export const offerScreenReviewUsers: offerScreenReviewUser[] = [
  {
    id: 1,
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/6.jpg',
    },
    rating: 4,
    comment:
      'Home is amazing. It"s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2023-10-02T09:23:20.316Z',
  },
];
