import React from 'react';
import { screen } from "@testing-library/react";
import { renderWithProviders } from '../../../tests/test-utils';
import AddBookForm from './AddBookForm';
import userEvent from '@testing-library/user-event';
import * as bookSlice from "../../features/books/bookSlice";

describe('AddBookForm', () => {
    beforeEach(() => {
        jest.restoreAllMocks();
    });

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

    it("AddBook Button should be disabled for empty fields", () => {
    
        renderWithProviders(
            <AddBookForm/>
        );

        userEvent.type(screen.getByTestId("author"), "");
        userEvent.type(screen.getByTestId("title"), "");
        userEvent.type(screen.getByTestId("pages"), "");
        
        userEvent.click(screen.getByTestId("add-book"));
        expect(screen.getByTestId("add-book")).toHaveAttribute("disabled");
        
    });    

    it("AddBook Button should not be disabled for non-empty fields", () => {
    
        renderWithProviders(
            <AddBookForm/>
        );

        userEvent.type(screen.getByTestId("author"), "asd");
        userEvent.type(screen.getByTestId("title"), "asd");
        userEvent.type(screen.getByTestId("pages"), "123");
        
        userEvent.click(screen.getByTestId("add-book"));
        expect(screen.getByTestId("add-book")).not.toHaveAttribute("disabled");
        
    });

});