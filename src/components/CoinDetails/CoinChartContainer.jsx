import React, { useState } from "react";
import CoinChart from "./CoinChart";
import { useQuery } from "react-query";
import currencyStore from "../../Store/store";
import { fetchCoinHistoricData } from "../../services/fetchCoinHistoricData";
import Alert from "../Alert/Alert";
import Loader from "../Loader/Loader";

const CoinChartContainer = ({ coinId }) => {
  const { currency } = currencyStore();

  const [days, setDays] = useState(7);
  const [interval, setCoinInterval] = useState('daily');


  const { data: historicData, isLoading, isError } = useQuery(['coinHistoricData', coinId, currency, days , interval], () => fetchCoinHistoricData(coinId,currency , days , interval), {
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
});


  if (isLoading) {
    return <div><Loader/></div>;
  }

  if(isError) {
    return <Alert message="Error fetching data" type="error" />
}

  // console.log(coinId);

  return (
    <div>
      <CoinChart
        historicData={historicData}
        setDays={setDays}
        setCoinInterval={setCoinInterval} 
        days={days}
        currency={currency}
      />
    </div>
  );
};

export default CoinChartContainer;
