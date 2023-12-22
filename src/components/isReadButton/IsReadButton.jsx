import React from 'react'
import { useDispatch } from 'react-redux';
import { changeState } from '../../features/books/bookSlice';

function IsReadButton(props) {
  const dispatch = useDispatch();

  const inputHandleChange = () => {
    dispatch(changeState(props.id));
  }

  return (
    <>
      <input type="checkbox" onChange={inputHandleChange} checked={props.isRead} id={props.id}></input>
    </>
  )
}

export default IsReadButton;