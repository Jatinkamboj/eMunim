import React,{useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Income',
      data: [1,2,3,4],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
  ],
};

export function BarChart(props) {
  console.log(props.data)
  // useEffect(() => {
    // let td = [];
    // for(let i=0;i<12;i++){
    //     if(props.data[i]){
    //       td.push(props.data[i]);
    //       // tname.push(props.data[i].name);
    //     }
    //   }
    //   // data.labels = tname;
    //   data.datasets[0].data = td;
    // data.datasets.data=props.data
  // })
  
  return <Bar options={options} data={data} />;
}
