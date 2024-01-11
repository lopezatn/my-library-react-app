import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BooksTable from "../BooksTable/BooksTable";
import NewBookButton from "../NewBookButton/NewBookButton";
import AddBookForm from "../AddBookForm/AddBookForm";
import EditBookForm from "../EditBookForm/EditBookForm";

export default function Main() {
  return (
    <div>
      <Header />

      <main>
        <NewBookButton />
        <AddBookForm />
        <BooksTable />
      </main>

      <Footer />
    </div>
  );
}