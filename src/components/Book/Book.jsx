import React from "react";

const Book = ({ book }) => {
  console.log(book);

  return (
    <div className="border border-gray-400 p-5 rounded-lg">
      <div className="bg-gray-200 rounded-lg   flex items-center justify-center ">
        <img
          src={book.image}
          alt=""
          className="w-[130px] h-[160px]   p-2 rounded-lg"
        />
      </div>
      <div className="text-green-400 flex md:flex-row flex-col space-y-2 items-center  md:gap-10 py-2">
        <p className="bg-gray-100 rounded-4xl px-3">Young Adult</p>
        <p className="bg-gray-100 rounded-4xl px-3">Identity</p>
      </div>
      <h1 className="text-2xl font-bold py-2">{book.bookName}</h1>
      <p className="py-2">
        By : <span>{book.author}</span>
      </p>
      <div className="flex items-center justify-between font-bold border-t border-t-dotted border-t-gray-200 pt-2">
        <p>{book.tags[0]}</p>
        <p>
          <span>{book.rating}</span> ☆
        </p>
      </div>
    </div>
  );
};

export default Book;
