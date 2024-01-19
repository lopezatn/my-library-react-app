import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BooksTable from "../BooksTable/BooksTable";
import ToggleFormButton from "../ToggleFormButton/ToggleFormButton";
import AddBookForm from "../AddBookForm/AddBookForm";

export default function Main() {
  return (
    <div>
      <Header />

      <main>
        <BooksTable />
        <div className="button-container">
          <ToggleFormButton buttonText={"New Book"} FormComponent={AddBookForm} />
        </div>
      </main>

      <Footer />
    </div>
  );
}