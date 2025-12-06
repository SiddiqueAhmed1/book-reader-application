const AddBook = () => {
  return (
    <>
      <div>
        <div className="BookAddSection ">
          <form className="flex gap-3 justify-center my-8">
            <input
              type="text"
              placeholder="Enter your book..."
              className="border border-gray-400 rounded-md p-2 w-64 bg-gray-600/80"
            />
            <select className="border border-gray-400 rounded-md p-2 w-100% ">
              <option className="bg-gray-700 p-4" value="">
                Select a category
              </option>
              <option className="bg-gray-700" value="Islamic">
                Islamic
              </option>
              <option className="bg-gray-700" value="Fiction">
                Fiction
              </option>
              <option className="bg-gray-700" value="Historical">
                Historical
              </option>
              <option className="bg-gray-700" value="LIfe History">
                Life History
              </option>
            </select>
            <button className="border border-gray-600 bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-md cursor-pointer text-black font-semibold">
              Add Book
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
