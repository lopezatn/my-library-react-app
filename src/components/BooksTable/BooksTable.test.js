import React from "react";
import { render, screen } from "@testing-library/react";
import BooksTable from "./BooksTable";
import { renderWithProviders } from "../../utils/test-utils";

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
};

describe("BooksTable", () => {
  it("should render 6 items of table data", () => {
    renderWithProviders(<BooksTable />, { preloadedState: initialReduxState });
    const tableData = screen.getAllByRole("cell");
    expect(tableData).toHaveLength(6);
  });

  it("should render given book title", () => {
    const { getByTestId } = renderWithProviders(<BooksTable />, {
      preloadedState: initialReduxState,
    });
    const renderedBookTitle = getByTestId("book-title-testid");
    expect(renderedBookTitle.innerHTML).toBe(book.title);
  });

  it("should render the correct primitive values", () => {
    renderWithProviders(<BooksTable />, {
      preloadedState: initialReduxState,
    });

    expect(typeof book.title).toBe("string");
    expect(typeof book.author).toBe("string");
    expect(typeof book.pages).toBe("number");
    expect(typeof book.id).toBe("number");
    expect(typeof book.isRead).toBe("boolean");
  });

  
});
