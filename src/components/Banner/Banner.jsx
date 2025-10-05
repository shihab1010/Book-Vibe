import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex md:flex-row flex-col space-y-3 items-center justify-around p-10">
      <div>
        <h1 className="text-4xl font-bold mb-12">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn bg-[#23BE0A] text-white mb-4">
          View The List
        </button>
      </div>
      <div>
        <img src={bookImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
