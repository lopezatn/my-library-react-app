import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import bookSlice from "../redux/slices/books/bookSlice";

export function renderWithProviders(
  component,
  {
    preloadedState = {},
    store = configureStore({ reducer: { books: bookSlice }, preloadedState }),
    ...renderOptions
  } = {}
) {

  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(component, { wrapper: Wrapper, ...renderOptions }) }
}
