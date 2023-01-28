import React from 'react';
import BookList from '../components/BookList';
import Input from '../components/Input';

const BooksContainer = () => (
  <div className="container">
    <div>
      <BookList />
      <div className="horizontal-divider" />
      <Input />
    </div>
  </div>
);
export default BooksContainer;
