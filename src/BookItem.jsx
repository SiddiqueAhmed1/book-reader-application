import ReactStars from "react-stars";

const BookItem = () => {
  return (
    <>
      <div className="bookList flex justify-center my-5 border border-gray-700 rounded-md bg-indigo-800 w-96 mx-auto p-2 items-center gap-6 px-3">
        <h1>Productive Muslim</h1>

        <ReactStars count={5} size={24} />
        <button className="bg-teal-600 py-1 cursor-pointer px-4 border border-teal-600 rounded-md">
          Read
        </button>
      </div>
      <div className="bookList flex justify-center my-5 border border-gray-700 rounded-md bg-indigo-800 w-96 mx-auto p-2 items-center gap-6 px-3">
        <h1>Productive Muslim</h1>

        <ReactStars count={5} size={24} />
        <button className="bg-teal-600 py-1 cursor-pointer px-4 border border-teal-600 rounded-md">
          Read
        </button>
      </div>
      <div className="bookList flex justify-center my-5 border border-gray-700 rounded-md bg-indigo-800 w-96 mx-auto p-2 items-center gap-6 px-3">
        <h1>Productive Muslim</h1>

        <ReactStars count={5} size={24} />
        <button className="bg-teal-600 py-1 cursor-pointer px-4 border border-teal-600 rounded-md">
          Read
        </button>
      </div>
    </>
  );
};

export default BookItem;
