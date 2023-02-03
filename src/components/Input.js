import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/book/book';

const Input = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setGenre] = useState('');

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: v4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setAuthor('');
    setGenre('');
    setTitle('');
  };
  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={submitHandler}>
        <input
          className="input title-input"
          placeholder="Book title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className="input title-input"
          placeholder="Book author"
          required
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
        />
        <input
          className="input title-input"
          placeholder="Book genre"
          required
          onChange={(e) => setGenre(e.target.value)}
          value={category}
        />
        <button className="primary-button-big" type="submit">
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Input;
