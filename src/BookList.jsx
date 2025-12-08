import BookItem from "./BookItem";

const BookList = ({ bookData, onBookAdd }) => {
  return (
    <>
      <BookItem bookData={bookData} onBookAdd={onBookAdd} />
    </>
  );
};

export default BookList;
