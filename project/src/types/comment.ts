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
