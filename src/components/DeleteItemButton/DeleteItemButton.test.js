import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import DeleteItemButton from './DeleteItemButton';
import { removeBook } from '../../redux/slices/books/bookSlice';
import { renderWithProviders } from '../../utils/test-utils';

const book = {
    title: "some title",
    author: "some author",
    pages: 666,
    id: 666,
    isRead: true,
  };
  
const initialReduxState = {
    books: {
      booksList: [book],
    },
    reducer: {
    removeBook: (state, action) => {
      state.booksList = state.booksList.filter(
        (book) => book.id !== action.payload
      );
      },
    },
};

describe("DeleteItemButton", () => {
  it("should dispatch removeBook action with correct id when button is clicked", () => {
    renderWithProviders(<DeleteItemButton />, { preloadedState: initialReduxState, });
    // const DeleteButton = getByTestId("remove-button-testid");

    fireEvent.click(getByTestId("remove-button-testid"));
    expect(DeleteButton).toHaveBeenCalledWith(removeBook(book.id));
  });
})
