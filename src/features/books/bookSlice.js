import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "books",
  initialState: {
    booksList: [
      // {
      //   author: "Stephen Hawkings",
      //   title: "The theory of everything",
      //   pages: 399,
      //   isRead: false,
      //   id: 50,
      // },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.booksList.push(action.payload);
    },
    removeBook: (state, action) => {
      state.booksList = state.booksList.filter(
        (book) => book.id !== action.payload
      );
    },
    changeState: (state, action) => {
      for (let i = 0; i < state.booksList.length; i++) {
        const book = state.booksList[i];
        if (book.id === action.payload) {
          book.isRead = !book.isRead;
        }
      }
    }
  },
});

export const { changeState, addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
