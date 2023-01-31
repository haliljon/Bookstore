const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// action
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const initialCategoriesState = {
  categories: [],
  isChecking: false,
  message: '',
};
const categoriesReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return { ...state, isChecking: true, message: 'Under construction' };
    default:
      return state;
  }
};

export default categoriesReducer;
