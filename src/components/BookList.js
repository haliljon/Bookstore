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
  console.log(bookStoreList);
  return (
    <ul className="books">
      {bookStoreList.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
};
export default BookList;
