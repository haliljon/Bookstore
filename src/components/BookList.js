import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { displayBooks } from '../redux/book/book';

const BookList = () => {
  const dispatch = useDispatch();
  const bookStoreList = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(displayBooks());
  }, [dispatch]);

  return (
    <ul className="books">
      {bookStoreList.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </ul>
  );
};
export default BookList;
