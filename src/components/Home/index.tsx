import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { AccordionGeneral } from './GeneralInfo';
import { ContainerData1, ContainerData2, ContainerData3, GeneralDv } from './styles';

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
    <div>
      <AccordionGeneral/>
      <GeneralDv >
        <ContainerData1 data={data}>
        </ContainerData1>
        <ContainerData2 data={data}>
        </ContainerData2>
        <ContainerData3 data={data}>
        </ContainerData3>
      </GeneralDv>
    </div>
  )
}