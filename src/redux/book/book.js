import { createSlice } from '@reduxjs/toolkit';

const initialBookState = [];
const bookSlice = createSlice({
  name: 'books',
  initialState: initialBookState,
  reducers: {
    addBook(state, action) {
      return [
        ...state,
        { id: action.id, title: action.title, author: action.author },
      ];
    },
    removeBook(state, id) {
      return [...state.filter((book) => book.id !== id)];
    },
  },
});

export const bookActions = bookSlice.actions;
export default bookSlice.reducer;
