import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    booksList: [],
  },
  reducers: {
    addBook: (state, action) => {
        state.booksList.push(action.payload);
    },
    removeBook: (state, action) => {
        state.booksList = state.booksList.filter(book => book.id !== action.payload);
    }
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
