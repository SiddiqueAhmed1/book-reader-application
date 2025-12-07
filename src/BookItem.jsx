import { Fragment } from "react";
import ReactStars from "react-stars";

const BookItem = ({ bookData }) => {
  return (
    <>
      <div>
        {bookData.length === 0 ? (
          <div className="text-center my-5">
            <h1 className="text-4xl font-semibold">No book found</h1>
          </div>
        ) : (
          <div className="mt-10">
            {bookData.map((book, index) => {
              return (
                <Fragment key={index}>
                  <div className="bookList flex justify-center  my-5 border border-gray-700 rounded-md bg-indigo-800 w-[550px] mx-auto p-2 px-3 items-center gap-10">
                    <h1 className="text-xl ">{book.title}</h1>

                    <div className="rating flex items-center gap-3">
                      <ReactStars
                        count={5}
                        size={28}
                        value={book.review}
                        className="text-center"
                      />
                      <span>{book.review}/5</span>
                    </div>
                    {book.isRead === false ? (
                      <button className="bg-pink-700 py-1 cursor-pointer px-4 border border-pink-700 hover:bg-pink-800 rounded-md text-xl">
                        Unread
                      </button>
                    ) : (
                      <button className="bg-teal-600 py-1 cursor-pointer px-4 border border-teal-600 hover:bg-teal-700 rounded-md text-xl">
                        Read
                      </button>
                    )}
                  </div>
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default BookItem;
