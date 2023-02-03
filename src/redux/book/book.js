import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const DISPLAY_BOOKS = 'bookstore/books/DISPLAY_BOOKS';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sF3v4K9XvF0U28c60dQV/books';
// actions

export const displayBooks = createAsyncThunk(
  DISPLAY_BOOKS,
  async (post, { dispatch }) => {
    const response = await fetch(URL);
    const data = await response.json();
    const books = Object.keys(data).map((id) => ({
      ...data[id][0],
      item_id: id,
    }));
    dispatch({
      type: DISPLAY_BOOKS,
      payload: books,
    });
  },
);

export const addBook = createAsyncThunk(
  ADD_BOOK, async (book, { dispatch }) => {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({ type: ADD_BOOK, payload: book });
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id, { dispatch }) => {
    await fetch(`${URL}/${id}`, { method: 'DELETE' });
    dispatch({ type: REMOVE_BOOK, payload: id });
  },
);

const initialBookState = [];

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case DISPLAY_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
