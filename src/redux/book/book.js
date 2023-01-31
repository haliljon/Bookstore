const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

// actions
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const initialBookState = [];
const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
};

export default bookReducer;
