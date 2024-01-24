import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './slices/books/bookSlice';

export default configureStore({
  reducer: {
    books: bookSlice
  },
})