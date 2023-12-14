import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    booksList: [],
  },
  reducers: {
    addBook: (state, action) => {
        state.bookList.push(action.payload);
    },
    removeBook: (state, action) => {
        state.bookList = state.bookList.filter(book => book.id !== action.payload);
    }
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
