
$(document).ready(() => {
    // graph 
let  days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let sales = ["12000","3000","6000","800","2000","100","50000"];
  

let chart = document.querySelector("#weekly_sales_chart");
new Chart(chart, {
        type: 'line',
        data: {
              labels: days,
              datasets: [
                      { 
                        data: sales,
                        label: "Weekly Sales",
                        borderColor: "#ed017f",
                        fill: true

                      }
                    ]
      }
});
});

