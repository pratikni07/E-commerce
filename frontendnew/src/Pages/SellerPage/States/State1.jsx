import React from 'react';
import Chart from "react-apexcharts";

const State1 = () => {
  const options = {
    xaxis: {
      categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    }
  };
  
  const series = [
    {
      name: "series-1",
      data: [30, 40, 25, 50, 49, 21, 70, 51]
    },
    // {
    //   name: "series-2",
    //   data: [23, 12, 54, 61, 32, 56, 81, 19]
    // },
  ];

  return (
    <div className='w-[650px] p-2 border border-solid border-slate-200 bg-white rounded-md'>
        <div className='flex justify-between px-4 py-3'>
            <p className=''>Product Sales </p>
            <div className='flex items-center gap-3'>
                <div className='w-2 h-2 bg-blue-400'></div>
                Orders
            </div>
        </div>
      <Chart options={options} series={series} type="area" />
    </div>
  );
};

export default State1;
