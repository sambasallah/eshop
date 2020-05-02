import React, { Component, useState } from 'react'
import { Line,Bar,Pie } from 'react-chartjs-2';

const DashboardChart = ({ weeklySales }) => {

    
    let labels = [];
    let data = [];

    weeklySales.map((value,index) => {
       labels.push(value.day);
       data.push(value.daily_sale);
    });
 

    const [chart, setChartData] = useState(
        {
            data : {
                labels : labels,
                datasets :[{
                    label : 'Weekly Sales',
                    data : data,
                    borderColor : '#dc3545',
                    fill : true
                }]
            }
        }
    );
    

       return(
        <div className="chart">
        <Line
         data={chart.data}
         width={100}
         height={450}
         options={{ maintainAspectRatio: false }}
     />
     </div>
       );
    
       
    
}

export default DashboardChart;
