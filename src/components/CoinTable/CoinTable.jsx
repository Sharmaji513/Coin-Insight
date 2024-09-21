import React, { useEffect } from 'react'
import { fetchCoinData } from '../../services/fetchCoinData'


const CoinTable = () => {



  useEffect(()=>{
    fetchCoinData()
  })

  return (
    <div className="overflow-x-auto">
  <table className="table w-[80vw] mx-auto mt-10">
    {/* head */}
    <thead className='h-[4vw] bg-yellow-500  text-black'>
      <tr className='text-[1.2vw]  '>
      
        <th>Coin</th>
        <th>Price</th>
        <th>24h Change</th>
        <th>Mrket Cap</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
        
      </tr>

    </tbody>
 
  </table>
  
</div>
  )
}

export default CoinTable