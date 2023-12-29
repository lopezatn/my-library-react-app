import React from 'react';
import { render, screen } from "@testing-library/react";
import BooksTable from './BooksTable';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { renderWithProviders } from '../../../tests/test-utils';



xit("should render 5 items of table data", () => {
    renderWithProviders(
        <BooksTable/>
    )
    const tableData = screen.getAllByRole("cell");
    expect(tableData).toHaveLength(5);
});


xit("should render 5 items of table data", () => {
    render(
    <Provider store={store}>
        <BooksTable/>
    </Provider>
    );
    const tableData = screen.getAllByRole("cell");
    expect(tableData).toHaveLength(5);
});

// test("should render 3 books on the table", () => {
//     render(
//     <Provider store={store}>
//         <BooksTable/>
//     </Provider>
//     );
//     const books = useSelector((state) => state.books.booksList);
//     dispatch = useDispatch();
    
//     const author = "A string";
//     const title = "A string";
//     const pages = 123;
//     const isRead = false;
//     const id = 55;

//     dispatch(addBook({ author, title, pages, isRead, id }));


// });

// test("should check the book data-type", () => {
//     render(
//     <Provider store={store}>
//         <BooksTable/>
//     </Provider>
//     );
//     const books = useSelector((state) => state.books.booksList);
//     dispatch = useDispatch();
    
//     const author = "A string";
//     const title = "A string";
//     const pages = 123;
//     const isRead = false;
//     const id = 55;


//     dispatch(addBook({ author, title, pages, isRead, id }));


// });