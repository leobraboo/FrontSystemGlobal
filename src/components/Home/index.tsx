

// import { Chart } from 'react-chartjs-2';

// import { ContainerData } from "./styles";

// <Chart
//   type={}
//   options={}
//   data={}
//   {...props}
// />

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { AccordionGeneral } from './GeneralInfo';
import { ContainerData1 , ContainerData2 , ContainerData3 , GeneralDv } from './styles';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Armações', 'Lentes', 'Contato', 'Sol', 'Outros', 'Saida'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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
      borderWidth: 1,
    },
  ],
};

export function Homegeneral() {
  return (
    <>
    <GeneralDv>
      <ContainerData1 data={data}>
      </ContainerData1>
      <ContainerData2 data={data}>
      </ContainerData2>
      <ContainerData3 data={data}>
      </ContainerData3>
    </GeneralDv>
    <AccordionGeneral/>

    </>
  )
}
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Bar Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//   ],
// };

// export function App() {
//   return <Bar options={options} data={data} />;
// }


// export function Homegeneral() {
//   return (
//     <ContainerData>
//       <h1 style={{ fontSize:"60px" }} > TESTEEEEEEEEEE</h1>
//     </ContainerData>
//   )
// }