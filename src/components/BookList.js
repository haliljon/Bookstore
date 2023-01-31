import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const bookStoreList = useSelector((state) => state.book);
  // const books = [
  //   {
  //     id: 1,
  //     category: 'Action',
  //     title: 'The Hunger Games',
  //     author: 'Suzanne Collins',
  //     progress: '64%',
  //     chapter: 'Chapter 17',
  //   },
  //   {
  //     id: 2,
  //     category: 'Science Fiction',
  //     title: 'Dune',
  //     author: 'Frank Herbert',
  //     progress: '8%',
  //     chapter: 'Chapter 3',
  //   },
  //   {
  //     id: 3,
  //     category: 'Economy',
  //     title: 'Capital in the Twenty-First Century',
  //     author: 'Thomas Piketty',
  //     progress: '0%',
  //     chapter: 'Introduction',
  //   },
  // ];

  return (
    <ul className="books">
      {bookStoreList.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </ul>
  );
};
export default BookList;
