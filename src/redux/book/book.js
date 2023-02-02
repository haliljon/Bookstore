import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const DISPLAY_BOOKS = 'bookstore/books/DISPLAY_BOOKS';
const URL = 'https://bookstore-f0d65-default-rtdb.asia-southeast1.firebasedatabase.app/bookstore.json';
// actions

export const displayBooks = createAsyncThunk(
  DISPLAY_BOOKS,
  async () => axios.get(URL).then((response) => {
    const objData = response.data;
    const books = Object.keys(objData).map((key) => ({
      id: key, ...objData[key][0],
    }));
    return books;
  }),
);

export const addBook = createAsyncThunk(
  ADD_BOOK, async (book, { dispatch }) => {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(book),
    });
    dispatch({ type: ADD_BOOK, book });
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id, { dispatch }) => {
    await fetch(`${URL}`, { method: 'DELETE' });
    dispatch({ type: REMOVE_BOOK, id });
  },
);

const initialBookState = [];
// {
//   id: 1,
//   genre: 'Novel',
//   title: 'Anna Karenina',
//   author: 'Lev Tolstoy',
// },
// {
//   id: 2,
//   genre: 'Novel',
//   title: 'One Hundred Years of Solitude',
//   author: 'Gabriel García Márquez',
// },
// {
//   id: 3,
//   genre: 'Dystopian fiction',
//   title: 'Nineteen Eighty-Four',
//   author: 'George Orwell',
// },
// {
//   id: 4,
//   genre: 'Novel',
//   title: 'Crime and Punishment',
//   author: 'Fyodor Dostoevsky',
// },

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case DISPLAY_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default bookReducer;
