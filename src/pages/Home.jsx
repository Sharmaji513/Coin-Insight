import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import CoinTable from "../components/CoinTable/CoinTable";
import dashboardImg from "../assets/dashboard.png";
import { Footer } from "../components/Footer/Footer";
import Accordion from "../components/Accordion/Accordion";

const Home = () => {
  return (
    <div className="h-full w-full"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/564x/28/42/e0/2842e0d7d6664f95c9b0b5477692aa5d.jpg)",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center mx-auto mb-10 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-xl mb-12 mt-20 sm:mt-32">
          <h1 className="mb-5 w-full text-3xl md:text-5xl font-bold">
            Crypto Tracker Platform
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={"/coin"}>
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>

        {/* Browser Mockup */}
        <div className="mockup-browser bg-base-300 border w-full sm:w-[80vw] h-[30vw] sm:h-[40vw] ">
          <div className="mockup-browser-toolbar">
            <div className="input">https://coinInsight.com</div>
          </div>
          <div className="bg-base-200 flex justify-center px-4 py-8 sm:py-16 ">
            <img src={`${dashboardImg}`} alt="Dashboard" />
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="hero min-h-[40vw] w-full bg-[#171717]">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:gap-20 w-full">
          <img
            src="https://i.pinimg.com/originals/ef/4e/50/ef4e50ce48061975e24cfbf3e25ea6db.gif"
            className="max-w-md lg:max-w-xl rounded-lg shadow-2xl w-1/2"
            alt="Crypto Feature"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">
              Get the most out of your assets, safely
            </h1>
            <p className="py-6">
              Choose from 21+ cryptocurrencies including Bitcoin and
              stablecoins.
            </p>
          </div>
        </div>
      </div>

      {/* Tracking Section */}
      <div className="hero min-h-[40vw] w-full bg-[#222038]">
        <div className="hero-content flex flex-col lg:flex-row items-center lg:gap-20 w-full">
          <img
            src="https://i.pinimg.com/564x/5c/01/97/5c0197f3c7041f7ca57bba5dab2fa191.jpg"
            className="max-w-md lg:max-w-2xl rounded-lg shadow-2xl"
            alt="Tracking"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">
              Automatically Track Cost Basis of Your Assets
            </h1>
            <p className="py-6">
              CoinLedger tracks the original purchase price of your assets,
              known as your cost basis. This allows you to see how much your
              investments have increased or decreased in value.
            </p>
          </div>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="w-full lg:w-1/2 h-auto flex justify-center items-center mx-auto gap-20 min-h-screen">
        <Accordion />
      </div>

      {/* Final Call to Action */}
      <div
        className="hero min-h-[30vw]"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/564x/f4/31/a4/f431a40035fbe503f1993f568f632648.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Start Tracking Your Portfolio Today
            </h1>
            <p className="mb-5">Check No credit card needed</p>
            <Link to={"/coin"}>  <button className="btn btn-primary">Explore</button> </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
