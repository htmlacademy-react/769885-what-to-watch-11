import {Comment} from '../../types/comment';

type CommentPropsType = {
  comment: Comment;
}

function GetMovieComment({comment}: CommentPropsType): JSX.Element {
  const formatDateComment = (date: string) => new Date(date).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment.comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{formatDateComment(comment.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );
}

export default GetMovieComment;
