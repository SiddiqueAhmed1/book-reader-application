const FilterBook = ({ isRead, isUnRead, allBook }) => {
  return (
    <>
      <div className="filterButton flex justify-center gap-3">
        <button
          onClick={allBook}
          className="border-0 rounded-md text-white p-2 px-4 cursor-pointer bg-gray-700 hover:bg-gray-600"
        >
          All
        </button>
        <button
          onClick={isRead}
          className="border-0 rounded-md bg-green-700 hover:bg-green-800 text-white border-t-gray-400 p-2 px-4 cursor-pointer"
        >
          Read
        </button>
        <button
          onClick={isUnRead}
          className="border-0 rounded-md bg-pink-800 hover:bg-pink-700 text-white border-t-gray-400 p-2 px-4 cursor-pointer"
        >
          Unread
        </button>
      </div>
    </>
  );
};

export default FilterBook;
