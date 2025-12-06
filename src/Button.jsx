const Button = ({ title, bg, color, type }) => {
  const handleFilter = () => {
    console.log("this is filter");
  };

  return (
    <>
      <div>
        <button
          onClick={handleFilter}
          type={type}
          className={`${bg} py-2 px-4 rounded-md ${color} font-semibold cursor-pointer`}
        >
          {title}
        </button>
      </div>
    </>
  );
};

export default Button;
