import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ books }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Books </h1>
      <div
        className="grid
        grid-cols-2
      md:grid-cols-3 gap-8 py-10"
      >
        <Suspense fallback={<span>Loading....</span>}>
          {books.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
