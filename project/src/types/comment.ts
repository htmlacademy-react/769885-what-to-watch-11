export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
}

export type CreateComment = {
  comment: string;
  rating: number;
}

export type Comments = Comment[]

export type RatingFilm = {
  bad: {
    from: number;
    to: number;
  };
  mediocre: {
    from: number;
    to: number;
  };
  good: {
    from: number;
    to: number;
  };
  very: {
    from: number;
    to: number;
  };
  awesome: {
    from: number;
    to: number;
  };
}
