import { useState } from "react";
import AddBook from "./AddBook";
import BookList from "./BookList";
import FilterBook from "./FilterBook";
import Header from "./Header";

const BookRead = () => {
  const [bookData, setBookAdd] = useState([]);
  const [showReadUnread, setShowReadUnread] = useState({
    read: null,
    unread: null,
    all: null,
  });

  // show read book handler
  const isRead = () => {
    setShowReadUnread({ read: true, unread: false, all: false });
  };

  // show unread book handler
  const isUnRead = () => {
    setShowReadUnread({ unread: true, read: false, all: false });
  };

  // show all book hanlder
  const allBook = () => {
    setShowReadUnread({ all: true, unread: false, read: false });
  };

  return (
    <>
      <div>
        <Header />
        <AddBook bookData={bookData} onBookAdd={setBookAdd} />
        <FilterBook isRead={isRead} isUnRead={isUnRead} allBook={allBook} />
        <BookList
          showReadUnread={showReadUnread}
          bookData={bookData}
          onBookAdd={setBookAdd}
        />
      </div>
    </>
  );
};

export default BookRead;
