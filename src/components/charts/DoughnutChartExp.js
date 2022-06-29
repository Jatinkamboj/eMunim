import React,{useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
        labels: [],
        datasets: [
          {
            data: [],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          }]};

      const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height / 160).toFixed(2);
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "top";
             var text = "Expenses",
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 2.15;
             ctx.font =   "bold " + fontSize + "em helvetica";
             ctx.fillText(text, textX, textY);
             ctx.save();
        }}]
      
function DoughnutChartExp(props) {
  
  useEffect(() => {
    let td = [];
    let tname = [];
    for(let i=0;i<props.data.length;i++){
        if(props.data[i].type ==="Expense"){
          td.push(props.data[i].amount);
          tname.push(props.data[i].name);
        }
      }
      data.labels = tname;
      data.datasets[0].data = td;
      
  });
  
  return (
    <div><Doughnut data={data} options={{
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
              display: false
          }
      }
      }} redraw={true} plugins={plugins}/>
      
      </div>
  )
}

export default DoughnutChartExp