import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
        text: 'Chart.js Line Chart',
      },
    },
  };

const Evolucion = ({transactions}) => {
    const today = new Date ();
    const labels = ['Enero',
     'Febrero', 
     'Marzo', 
     'Abril', 
     'Mayo', 
     'Junio', 
     'Julio', 
     'Agosto', 
     'Septiembre', 
     'Octubre', 
     'Noviembre', 
     'Diciembre'
    ];

    const actual = labels.map ((element, index) => {
        let total = 0;
        transactions.forEach (element => {
            let month = new Date (element.fecha).getMonth();
            let year = new Date (element.fecha).getFullYear();
            if (month === index && year === today.getFullYear()) {
                total += element.total;
            }
        })
        return total;
    })

    const anterior = labels.map ((element, index) => {
        let total = 0;
        transactions.forEach (element => {
            let month = new Date (element.fecha).getMonth();
            let year = new Date (element.fecha).getFullYear();
            if (month === index && year === today.getFullYear() - 1) {
                total += element.total;
            }
        })
        return total;
    })

    const data = {
        labels,
        datasets : [
            {
                label: today.getFullYear(),
                data: actual,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
              },
              {
                label: today.getFullYear() - 1,
                data: anterior,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
              },
        ]
    }

    return(
        <Card className="mb-10" border='light'>
            <Card.Body>
                <h2>Evolución de gastos</h2>
                <Line options={options} data={data} />
            </Card.Body>
        </Card>
    )
}

export default Evolucion;
