import React from "react";
import { useNavigate } from "react-router-dom";

function SearchItem({ coinData, setSearchText }) {
  const navigate = useNavigate();
  console.log(coinData);

  function handleCoinRedirect(id) {
    setSearchText("");
    navigate(`/details/${id}`);
  }

  return (
    <>
 
      <li
        className="container w-[20vw] h-[10vh]   hover:bg-gray-200 hover:text-black transition-colors duration-300 absolute bg-black"
        onClick={() => handleCoinRedirect(coinData?.api_symbol)}
      >
        <a className="flex items-center justify-between h-12 p-2">
          <img src={coinData.thumb} className="h-8 w-8" alt={coinData.name} />
          <p className="font-semibold">
            {coinData.name} 
          </p>
          <p className="text-yellow-500">👑 {coinData.market_cap_rank}</p>
        </a>
      </li>
    </>
  );
}

export default SearchItem;
