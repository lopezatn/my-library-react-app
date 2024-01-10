import React from 'react'
import { useDispatch } from 'react-redux';
import { editBook } from '../../features/books/bookSlice';

function EditItemButton(props) {
    const dispatch = useDispatch();

    const editItem = () => {
        dispatch(editBook(props.book));
    }

  return (
    <div>
        <button onClick={editItem}>EDIT</button>
    </div>
  )
}

export default EditItemButton