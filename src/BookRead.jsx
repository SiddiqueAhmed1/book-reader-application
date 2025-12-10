import { useState } from "react";
import AddBook from "./AddBook";
import BookList from "./BookList";
import FilterBook from "./FilterBook";
import Header from "./Header";

const BookRead = () => {
  const [bookData, setBookAdd] = useState([]);

  // handle all book
  const handleAllBook = () => {
    return bookData;
  };

  // handle read book
  const handleReadBook = () => {
    setBookAdd(bookData.filter((book) => book.isRead === true));
  };

  // handle unread book
  const handleUnReadBook = () => {
    setBookAdd(
      bookData.filter((book) => (book.isRead === false ? { ...book } : book))
    );
  };

  return (
    <>
      <div>
        <Header />
        <AddBook bookData={bookData} onBookAdd={setBookAdd} />
        <FilterBook
          handleAllBook={handleAllBook}
          handleReadBook={handleReadBook}
          handleUnReadBook={handleUnReadBook}
        />
        <BookList bookData={bookData} onBookAdd={setBookAdd} />
      </div>
    </>
  );
};

export default BookRead;
