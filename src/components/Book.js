import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { bookActions } from '../redux/book/book';

const Book = ({ props }) => {
  const {
    id, title, author, genre,
  } = props.book;

  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(bookActions.removeBook(id));
  };
  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">{genre}</h4>
            <h2 className="book-title">{title}</h2>
            <h6 className="book-author">{author}</h6>
            <div className="action-buttons">
              <button className="button-outline" type="button">
                Comments
              </button>
              <div className="vertical-divider" />
              <button
                className="button-outline"
                type="button"
                onClick={removeHandler}
              >
                Remove
              </button>
              <div className="vertical-divider" />
              <button className="button-outline" type="button">
                Edit
              </button>
            </div>
          </div>
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-stat">
              <p className="percent-complete">75%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 7</p>
              </div>
              <div>
                <button className="primary-button" type="button">
                  UPDATE PROGRESS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
export default Book;
