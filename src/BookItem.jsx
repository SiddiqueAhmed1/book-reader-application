import { Fragment } from "react";
import ReactStars from "react-stars";

const BookItem = ({ bookData, onBookAdd }) => {
  // handle delete book
  const handleDeleteBook = (id) => {
    onBookAdd(bookData.filter((book) => book.id !== id));
  };

  // hanlde star value
  const handleStarValue = ({ newRating }) => {
    onBookAdd(() => []);
    console.log(newRating);
  };

  return (
    <>
      <div>
        {bookData.length === 0 ? (
          <div className="text-center my-5">
            <h1 className="text-4xl font-semibold">No book found</h1>
          </div>
        ) : (
          <div className="mt-10 ">
            {bookData.map((book, index) => {
              return (
                <Fragment key={index}>
                  <div className="bookList flex   my-5 border border-gray-700 rounded-md bg-indigo-800 w-[650px] mx-auto  p-2 px-6 items-center gap-2">
                    <h1 className="text-lg mr-4 w-[35%]">{book.title}</h1>

                    <div className="rating flex items-center gap-3  w-[30%]">
                      <ReactStars
                        onChange={(newRating) =>
                          handleStarValue({ newRating, book })
                        }
                        count={5}
                        size={28}
                        value={book.review}
                        className="text-center"
                      />
                      <span>{book.review > 0 ? book.review : 0}/5</span>
                    </div>
                    <div className=" w-[15%]">
                      {book.isRead === false ? (
                        <button className="bg-pink-700 py-1  cursor-pointer px-4 border border-pink-700 hover:bg-pink-800 rounded-md text-xl">
                          Unread
                        </button>
                      ) : (
                        <button className="bg-teal-600 py-1  cursor-pointer px-4 border border-teal-600 hover:bg-teal-700 rounded-md text-xl">
                          Read
                        </button>
                      )}
                    </div>
                    <button
                      onClick={() => handleDeleteBook(book.id)}
                      className="bg-red-600 py-1 w-[20%] cursor-pointer px-4 border border-red-600 hover:bg-red-700 rounded-md text-xl "
                    >
                      Remove
                    </button>
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
