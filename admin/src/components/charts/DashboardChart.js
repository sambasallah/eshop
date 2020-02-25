import React, { Component, useState } from 'react'
import { Line,Bar,Pie } from 'react-chartjs-2';

const DashboardChart = () => {

    const [chart, setChartData] = useState(
        {
            data : {
                labels : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'],
                datasets :[{
                    label : 'Weekly Sales',
                    data : [3000,2500,7000,9000,5000,10000],
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
         height={400}
         options={{ maintainAspectRatio: false }}
     />
     </div>
       );
    
       
    
}

export default DashboardChart;
