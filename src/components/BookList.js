import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookStoreList = useSelector((state) => state.book);

  return (
    <ul className="books">
      {bookStoreList.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
};
export default BookList;
