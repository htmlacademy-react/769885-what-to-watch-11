import {Comments} from '../../types/comment';
import GetMovieComment from './movie-comments';

type MovieReviewsPropsType = {
  comments: Comments;
}

function MoviePageReviews({comments}: MovieReviewsPropsType): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(comments.length / 2).map((comment) => <GetMovieComment comment={comment} key={comment.id} />)}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(0, comments.length / 2).map((comment) => <GetMovieComment comment={comment} key={comment.id} />)}
      </div>
    </div>
  );
}

export default MoviePageReviews;
