import { CategoryScale } from 'chart.js'
import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from "chart.js/auto";

const CoinChart = ({historicData, setDays, days, currency }) => {

  Chart.register(CategoryScale)

  // console.log(historicData ,days,currency);

  // if(!historicData){
  //   return <div>No Data available</div>
  // }

  
  return (
    <div className="h-[500px] w-[800px] mx-auto">
      <Line 
      
      // example: how to use
      data={{
        labels:['1',"2","5","4","5"],
        datasets: [
          {
            data: [2,6,8,8,6]
          },
          {
            data: [8,2,1,3,5]
          }
        ],
        
      }}

   

      />
    </div>
  )
}

export default CoinChart