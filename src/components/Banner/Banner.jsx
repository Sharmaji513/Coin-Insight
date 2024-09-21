import React from 'react'

const Banner = () => {
  return (
    <div
      className="hero min-h-[30vw]"
      style={{
        backgroundImage: "url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/7c2ec575085611.5cab290a85962.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1
            className="mb-5 text-5xl font-bold mt-52 shadow-text-shadow"
            style={{ textShadow: "2px 2px 5px black" }}  // Adding black text shadow
          >
            Cyrpto Tracker
          </h1>
          <p className="mb-6 drop-shadow-xl text-yellow-500">
            Track your Coins and NFTs with CoinGecko Portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
