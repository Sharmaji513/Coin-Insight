import { CategoryScale } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { chartDays } from "../../Utils/config";
import Alert from "../Alert/Alert";

const CoinChart = ({ historicData, setDays, days, currency , setCoinInterval , interval}) => {
  Chart.register(CategoryScale);

function handleDayChange(e){
  const daysSelected = e.target.value;
  if(daysSelected == 1) {
      setCoinInterval('');
  } else {
      setCoinInterval('daily');
  }
  // console.log(e.target.value);
  setDays(e.target.value)
  
}





  if(!historicData){
    return <Alert message="No data available" type="warning" />
  }
  // console.log(historicData, days, currency );
  return (

    <div  className="flex flex-col items-center justify-center mt-6 p-6 w-full">

 
    {/* Coin Chart  */}
    <div className="h-[500px] w-[800px] mx-auto">
      <Line
        data={{
          labels: historicData.prices.map((coinPrice) => {
            let date = new Date(coinPrice[0]); // CONVERTING UNIX TIMESTAMP TO DATE
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),
          datasets: [
            {
              label: `Price (Past ${days} ${ days === 1 ? "Day" : "Days"}) in ${currency.toUpperCase()}`,
              data: historicData.prices.map((coinPrice) => coinPrice[1]),
            },
          ],
        }}


        options={{
          responsive: true,
          maintainAspectRatio: false,
          elements: {
              point: {
                  radius: 0
              }
          },
          
      }}
      />
    </div>

    {/* Chart Select Options  */}
    <div className="flex justify-center mt-10 w-full ">
      <select className="select select-primary w-full max-w-xs" onChange={handleDayChange} >
     
      {chartDays.map((day,index) =>{
            return ( <option selected={days == day.value} key={index} value={day.value}> {day.label}</option>)
           
        })}
      </select>

    </div>

    </div>
  );
};

export default CoinChart;
