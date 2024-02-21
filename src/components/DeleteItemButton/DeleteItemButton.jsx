import React from 'react'
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/slices/books/bookSlice';

function DeleteItemButton(props) {
    const dispatch = useDispatch();

    const removeFromLocalStorage = () => {
      const storedData = localStorage.getItem('bookData');
      const existingData = storedData ? JSON.parse(storedData) : {books: { booksList: [] }};
      const indexToRemove = existingData.books.booksList.findIndex(book => book.id === props.id);

      if (indexToRemove !== -1) {
        existingData.books.booksList.splice(indexToRemove, 1);
        localStorage.setItem('bookData', JSON.stringify(existingData));
      } else {
        console.error('Index not found');
      }

    }

    const removeItem = () => {
        dispatch(removeBook(props.id));
        removeFromLocalStorage();
    }

  return (
    <button data-testid="remove-button-testid" onClick={removeItem}>DELETE</button>
    )
}

export default DeleteItemButton;