import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './slices/books/bookSlice';

const storedData = localStorage.getItem('bookData');
const initialState = storedData ? JSON.parse(storedData) : { books: { booksList: [] }};

export default configureStore({
  reducer: {
    books: bookSlice
  },
  preloadedState: initialState,
});