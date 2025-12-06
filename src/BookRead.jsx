import AddBook from "./AddBook";
import BookList from "./BookList";
import FilterBook from "./FilterBook";
import Header from "./Header";

const BookRead = () => {
  return (
    <>
      <div>
        <Header />
        <AddBook />
        <FilterBook />
        <BookList />
      </div>
    </>
  );
};

export default BookRead;
