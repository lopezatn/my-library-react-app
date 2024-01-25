import React from 'react'
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/slices/books/bookSlice';

function DeleteItemButton(props) {
    const dispatch = useDispatch();


    const removeItem = () => {
        dispatch(removeBook(props.id));
    }

  return (
    <button data-testid="remove-button-testid" onClick={removeItem}>DELETE</button>
    )
}

export default DeleteItemButton;