import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import currencyStore from "../Store/store";
import { fetchCoinDetails } from "../services/fetchCoinDetails";
import parse from "html-react-parser";

const CoinDetails = () => {
  const { coinId } = useParams();
  const { currency } = currencyStore();

  const [symbol, setSymbol] = useState("₹");



  //fetching data using tern stack
  const { data, isLoading, isError } = useQuery(
    ["coins", coinId],
    () => fetchCoinDetails(coinId),
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );

  console.log(data);

    // Update the symbol based on the selected currency
    useEffect(() => {
        if (currency === "inr") {
          setSymbol("₹");
        } else if (currency === "usd") {
          setSymbol("$");
        }
      }, [currency]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Something went wrong</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row">
        <div className="md:w-[40%] w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">
          <img className="h-52" src={data?.image?.large} alt="" />
          <h1 className="text-4xl font-bold mb-5">{data?.name}</h1>

          <p className="w-full px-6 py-4 text-justify">
            {parse(data?.description.en)}
          </p>
        </div>

        <div className="stats shadow h-[10vw] w-full">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Rank</div>
            <div className="stat-value">{data?.market_cap_rank}</div>
            <div className="stat-desc">Jan 1st - Dec 31st</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Current Price</div>
            <div className="stat-value">
              {symbol}
              {numberWithCommas(data?.market_data.current_price[currency])}
            </div>
          
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Market</div>
            <div className="stat-value">
              {numberWithCommas(
                data?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}{" "}
              M
            </div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetails;
