import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";

// Lazy loading components
const CoinInfo = lazy(() => import("./pages/CoinInfo"));
const CoinDetails = lazy(() => import("./pages/CoinDetails"));
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div><Loader/></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin" element={<CoinInfo />} />
          <Route path="/details/:coinId" element={<CoinDetails />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
