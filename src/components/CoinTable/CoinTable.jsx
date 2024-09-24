import React, { useEffect, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";

const CoinTable = () => {



  const { data, isLoading, isError, error} = useQuery(['coins'], () => fetchCoinData('usd'), {
      // retry: 2,
      // retryDelay: 1000,
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
  });


  console.log(data);
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;



  
  return (
    <div className="overflow-x-auto">
      <table className="table w-[80vw] mx-auto mt-10">
        {/* head */}
        <thead className="h-[4vw] bg-yellow-500  text-black">
          <tr className="text-[1.2vw]  ">
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Mrket Cap</th>
          </tr>
        </thead>

        <tbody>
          {/* Map through fetched coin data */}
          {data?.map((coin) => (
            <tr key={coin.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={coin.image} alt={coin.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{coin.name}</div>
                    <div className="text-sm opacity-50">{coin.symbol.toUpperCase()}</div>
                  </div>
                </div>
              </td>
              <td>${coin.current_price.toFixed(2)}</td>
              <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
              <td>${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
