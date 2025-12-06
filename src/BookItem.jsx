import ReactStars from "react-stars";

const BookItem = () => {
  const handleChangeStars = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="bookList">
        <h1>Productive Muslim</h1>
        <ReactStars count={5} onChange={handleChangeStars} />
      </div>
    </>
  );
};

export default BookItem;
