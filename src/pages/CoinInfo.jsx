import React from "react";
import CoinTable from "../components/CoinTable/CoinTable";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";

const CoinInfo = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <CoinTable />
    </div>
  );
};

export default CoinInfo;
