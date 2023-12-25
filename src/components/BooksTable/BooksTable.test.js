import React from 'react';
import { render, screen } from "@testing-library/react";
import BooksTable from './BooksTable';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '../../redux/store';

test("should render 5 items of table data", () => {
    render(
    <Provider store={store}>
        <BooksTable/>
    </Provider>
    );
    const tableData = screen.getAllByRole("cell");
    expect(tableData).toHaveLength(5);
});

test("should render 3 books on the table", () => {
    render(
    <Provider store={store}>
        <BooksTable/>
    </Provider>
    );
    const books = useSelector((state) => state.books.booksList);
    dispatch = useDispatch();

    dispatch(addBook({ author, title, pages, isRead, id }));

    const tableData = screen.getAllByRole("cell");
    expect(tableData).toHaveLength(5);
});