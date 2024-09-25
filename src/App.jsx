import React from "react";


import CoinInfo from "./pages/CoinInfo";
import { Route,  Routes } from "react-router-dom";
import CoinDetails from "./pages/CoinDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CoinInfo/>} />
        <Route path="/details/:coinId" element={<CoinDetails/>} />
      </Routes>
    </div>
  );
};

export default App;
