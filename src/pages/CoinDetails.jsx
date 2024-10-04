import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import CoinStat from "../components/CoinDetails/CoinStat";
import CoinChart from "../components/CoinDetails/CoinChart";

const CoinDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <CoinStat />
    
    </div>
  );
};

export default CoinDetailsPage;
