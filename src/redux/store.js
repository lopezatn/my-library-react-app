import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './slices/books/bookSlice';

const storedData = localStorage.getItem('bookData');
const initialState = storedData ? JSON.parse(storedData) : { books: { booksList: [] }};
console.log('storedData: ', storedData)
console.log('initialState: ', initialState);

export default configureStore({
  reducer: {
    books: bookSlice
  },
  preloadedState: initialState,
});