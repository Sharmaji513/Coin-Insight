import React from 'react'
import currencyStore from '../../Store/store'
import { Link } from 'react-router-dom'

const Navbar = () => {

const { setCurrency} = currencyStore()
  return (
    <div className="navbar bg-base-100 ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li ><a onClick={() => setCurrency("usd")}> USD</a></li>
          <li ><a onClick={() => setCurrency("inr")}>INR</a></li>
       
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <Link to={'/'} className="btn btn-ghost text-xl">Coin Insight</Link>
    </div>
    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
   
    </div>
  </div>
  )
}

export default Navbar