import React, { useRef, useState } from "react";
import { fetchCoinData } from "../../services/fetchCoinData";
import { useQuery } from "react-query";
import currencyStore from "../../Store/store"
import { useNavigate } from "react-router-dom";


const CoinTable = () => {
  const { currency } = currencyStore();
  const navigate = useNavigate()

  const [page, setPage] = useState(1);
  const { data, isLoading,  error  } = useQuery( ["coins", page , currency], () => fetchCoinData(page, currency),
    {
      // retry: 2,
      // retryDelay: 1000,
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );
console.log(useQuery());

  console.log(data);

  function handleCoinRedirect(id){
    navigate(`/details/${id}`)
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="overflow-x-auto ">
      <table className="table w-[80vw] mx-auto mt-10">
        {/* head */}
        <thead className="h-[4rem]  bg-yellow-500  text-black">
          <tr className="text-[1.2rem]  ">
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>

        <tbody>
          {/* Map through fetched coin data */}
          {data?.map((coin) => (
           
            <tr key={coin.id} onClick={()=>handleCoinRedirect(coin.id)} className="cursor-pointer ">
              <td>
                <div className="flex items-center gap-3 ">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={coin.image} alt={coin.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{coin.name}</div>
                    <div className="text-sm opacity-50">
                      {coin.symbol.toUpperCase()}
                    </div>
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

      <div className="w-[30vw] flex justify-center items-center text-center mx-auto mt-10 mb-10">
        <div className="join grid grid-cols-2">
          <button   disabled={page === 1} onClick={()=>setPage(page -1) } className="join-item btn btn-outline">Previous</button>
          <button onClick={()=>setPage(page +1) } className="join-item btn btn-outline">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CoinTable;
