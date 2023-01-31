import { createSlice } from '@reduxjs/toolkit';

const initialCategoriesState = [];
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialCategoriesState,
  reducers: {
    checkStatus(state) {
      return [
        {
          ...state,
          isChecking: true,
          message: 'Under construction',
        },
      ];
    },
  },
});

export const categoriesActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
