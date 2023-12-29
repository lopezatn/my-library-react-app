import React from 'react';
import { screen } from "@testing-library/react";
import { renderWithProviders } from '../../../tests/test-utils';
import AddBookForm from './AddBookForm';
import userEvent from '@testing-library/user-event';

it("should invoke the createBook function on form submit", () => {
    const mockDispatch = jest.fn();
    
    jest.mock("react-redux", () => ({
        ...jest.requireActual("react-redux"),
        useDispatch: () => mockDispatch,
    }));

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


    expect(mockDispatch).toHaveBeenCalledWith({
        author: "John Doe",
        title: "Sample Book",
        pages: 300,
        isRead: true,
        id: expect.any(Number),
    });
});
