import React from "react";
import useFetchSearch from "../../custom hooks/useFetchSearch";
import SearchItem from "./SearchItem";

function Search() {
  const { searchText, setSearchText, data, isError, isLoading } =
    useFetchSearch();

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="w-[20vw]  p-4">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          value={searchText}
          onChange={handleInputChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>

      <ul className="w-full mt-4">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching coins.</p>}
        {data && data.length === 0 && <p>No suggestions found.</p>}
        {data &&
          data.map((coin) => (
            <SearchItem
              key={coin.id}
              coinData={coin}
              setSearchText={setSearchText}
            />
          ))}
      </ul>
    </div>
  );
}

export default Search;
