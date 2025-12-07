import { useState } from "react";
import AddBook from "./AddBook";
import BookList from "./BookList";
import FilterBook from "./FilterBook";
import Header from "./Header";

const BookRead = () => {
  const [bookData, setBookAdd] = useState([
    {
      id: 1,
      title: "Imaner Dabi",
      author: "Maolana Saber Abdullah",
      review: 4,
      isRead: true,
    },
  ]);

  return (
    <>
      <div>
        <Header />
        <AddBook bookData={bookData} onBookAdd={setBookAdd} />
        <FilterBook />
        <BookList bookData={bookData} onBookAdd={setBookAdd} />
      </div>
    </>
  );
};

export default BookRead;
