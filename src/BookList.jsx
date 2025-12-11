import BookItem from "./BookItem";

const BookList = ({ bookData, showReadUnread, onBookAdd }) => {
  return (
    <>
      {showReadUnread.read === true
        ? bookData
            .filter((book) => book.isRead === true)
            .map((book) => (
              <BookItem onBookAdd={onBookAdd} book={book} bookData={bookData} />
            ))
        : showReadUnread.unread === true
        ? bookData
            .filter((book) => book.isRead === false)
            .map((book) => (
              <BookItem onBookAdd={onBookAdd} book={book} bookData={bookData} />
            ))
        : bookData
            .filter((book) => book)
            .map((book) => (
              <BookItem onBookAdd={onBookAdd} book={book} bookData={bookData} />
            ))}
    </>
  );
};

export default BookList;
