import React from 'react';
import { screen } from "@testing-library/react";
import { renderWithProviders } from '../../../tests/test-utils';
import AddBookForm from './AddBookForm';
import userEvent from '@testing-library/user-event';
import * as bookSlice from "../../features/books/bookSlice";

describe('AddBookForm', () => {
    it("should invoke the createBook function on form submit", () => {
        const addBookSpy = jest.spyOn(bookSlice, 'addBook');
    
        renderWithProviders(
            <AddBookForm/>
        );
    
        userEvent.type(screen.getByTestId("author"), "John Doe");
        expect(screen.getByTestId("author")).toHaveValue("John Doe");
        userEvent.type(screen.getByTestId("title"), "Sample Book");
        expect(screen.getByTestId("title")).toHaveValue("Sample Book");
        userEvent.type(screen.getByTestId("pages"), "300");
        expect(screen.getByTestId("pages")).toHaveValue(300);
        userEvent.click(screen.getByTestId("read"));
        expect(screen.getByTestId("read")).toBeChecked();
        
        userEvent.click(screen.getByTestId("add-book"));
    
    
        expect(addBookSpy).toHaveBeenCalledWith({
            author: "John Doe",
            title: "Sample Book",
            pages: 300,
            isRead: true,
            id: expect.any(Number),
        });
    });
});
