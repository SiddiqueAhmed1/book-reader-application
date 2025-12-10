import { useState } from "react";

const AddBook = ({ onBookAdd, bookData }) => {
  const [input, setInput] = useState({
    title: "",
    category: "",
  });

  // take input state
  const handleInput = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBookAdd = (e) => {
    e.preventDefault();

    // input validation
    if (!input.title || !input.category) {
      return alert("All fields are required!");
    }

    // add new book
    const newBook = {
      id: crypto.randomUUID(),
      title: input.title,
      category: input.category,
      isRead: false,
      review: null,
    };

    // update the bookData state
    onBookAdd([...bookData, newBook]);

    // empty input after submit form
    setInput({
      title: "",
      category: "",
    });
  };

  return (
    <>
      <div>
        <div className="BookAddSection ">
          <form
            onSubmit={handleBookAdd}
            className="flex gap-3 justify-center my-8"
          >
            <input
              name="title"
              onChange={handleInput}
              value={input.title}
              type="text"
              placeholder="Enter your book..."
              className="border border-gray-400 rounded-md p-2 w-64 bg-gray-600/80"
            />
            <select
              name="category"
              value={input.category}
              onChange={handleInput}
              className="border border-gray-400 rounded-md p-2 w-100% "
            >
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
