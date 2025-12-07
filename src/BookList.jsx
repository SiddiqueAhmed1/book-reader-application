import BookItem from "./BookItem";

const BookList = ({ bookData }) => {
  return (
    <>
      <BookItem bookData={bookData} />
    </>
  );
};

export default BookList;
