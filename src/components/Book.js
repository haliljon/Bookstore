import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { Progress } from 'antd';
import { removeBook } from '../redux/book/book';

const Book = ({
  id, title, author, category,
}) => {
  const percent = Math.floor((Math.random() * 99) + 1);
  const chapter = Math.floor((Math.random() * 25) + 1);
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <li>
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">{category}</h4>
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
            <div className="progress">
              <Progress
                type="circle"
                width={100}
                format={() => ''}
                strokeWidth={10}
                strokeColor={{
                  '0%': '#0291ff84',
                  '100%': '#0290ff',
                }}
                trailColor="#e8e8e8"
                percent={percent}
              />
            </div>
            <div className="progress-stat">
              <p className="percent-complete">
                {percent}
                %
              </p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">
                  Chapter
                  {chapter}
                </p>
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Book;
