import React, { useState } from "react";
import CoinChart from "./CoinChart";
import { useQuery } from "react-query";
import currencyStore from "../../Store/store";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";

const CoinChartContainer = ({ coinId }) => {
  const { currency } = currencyStore();

  const [days, setDays] = useState(7);
  // const [interval, setCoinInterval] = useState('daily');

  const {
    data: historicData,
    isLoading,
    isError,
  } = useQuery(
    () => fetchCoinHistoricData(coinId, currency, days),
    ["coinHistoriData", coinId, currency, days], //dependency
    {
      cacheTime: 1000 * 60 * 2,
      staleTime: 1000 * 60 * 2,
    }
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

//   if (isError) {
//     return <p>Error</p>;
//   }

  console.log(coinId);

  return (
    <div>
      <CoinChart
        historicData={historicData}
        setDays={setDays}
        days={days}
        currency={currency}
      />
    </div>
  );
};

export default CoinChartContainer;
