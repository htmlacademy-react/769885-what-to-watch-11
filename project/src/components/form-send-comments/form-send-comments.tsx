import {useState, ChangeEvent, BaseSyntheticEvent} from 'react';
import {CreateComment} from '../../types/comment';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {addCommentFilm} from '../../store/api-actions';
import {APIRoute} from '../../const';

function FormSendComments(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector((state) => state.film);
  const [formData, setFormData] = useState<CreateComment>({
    rating: 0,
    comment: ''
  });
  const handleFromChange = (evt :ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (evt.target.tagName === 'INPUT') {
      setFormData({...formData, rating: Number(evt.target.value)});
    }
    if (evt.target.tagName === 'TEXTAREA') {
      setFormData({...formData, comment: evt.target.value});
    }
  };

  const handleFormSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault();
    const [comment, rating] = [formData.comment, formData.rating];
    dispatch(addCommentFilm([film.id, {comment, rating}]));
    navigate(`${APIRoute.Films}/${film.id.toString()}`);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            <input className="rating__input" id="star-10" type="radio" name="rating" value="10" onChange={handleFromChange}/>
            <label className="rating__label" htmlFor="star-10">Rating 10</label>

            <input className="rating__input" id="star-9" type="radio" name="rating" value="9" onChange={handleFromChange}/>
            <label className="rating__label" htmlFor="star-9">Rating 9</label>

            <input className="rating__input" id="star-8" type="radio" name="rating" value="8" onChange={handleFromChange}/>
            <label className="rating__label" htmlFor="star-8">Rating 8</label>

            <input className="rating__input" id="star-7" type="radio" name="rating" value="7" onChange={handleFromChange}/>
            <label className="rating__label" htmlFor="star-7">Rating 7</label>

            <input className="rating__input" id="star-6" type="radio" name="rating" value="6" onChange={handleFromChange}/>
            <label className="rating__label" htmlFor="star-6">Rating 6</label>

            <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={handleFromChange}/>
            <label className="rating__label" htmlFor="star-5">Rating 5</label>

            <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={handleFromChange}/>
            <label className="rating__label" htmlFor="star-4">Rating 4</label>

            <input className="rating__input" id="star-3" type="radio" name="rating" value="3" onChange={handleFromChange}/>
            <label className="rating__label" htmlFor="star-3">Rating 3</label>

            <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={handleFromChange}/>
            <label className="rating__label" htmlFor="star-2">Rating 2</label>

            <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={handleFromChange}/>
            <label className="rating__label" htmlFor="star-1">Rating 1</label>
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text" onChange={handleFromChange}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              onClick={handleFormSubmit}
              disabled={formData.rating === 0 || !(formData.comment.length > 50 && formData.comment.length < 400)}
              className="add-review__btn" type="submit"
            >
              Post
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default FormSendComments;
