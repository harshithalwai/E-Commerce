import "./style.css";

const SearchBar = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="searchbox rounded-[10px] search-box w-[100%] h-[50px] bg-[#e5e5e5] relative p-2 px-4">
          <input
            type="text"
            name="search"
            id="search"
            className="border-none   outline-none w-full h-full"
            placeholder="Search for products, brands and more !"
          />
        </div>
        <button className="bg-[#FF5252] text-white w-[120px] font-[400] cursor-pointer rounded-[10px]">Search</button>
      </div>
    </>
  );
};

export default SearchBar;
