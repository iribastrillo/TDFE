import { Card } from "react-bootstrap"
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const Ingresos = ({data,categories}) => {

    const labels = categories.filter(c => c.id > 6);
    const points = [];

    labels.forEach(element => {
        let eachTransaction = data.filter(d => d.categoria == element.id);
        if(eachTransaction.length !== 0) {

            const total = eachTransaction.reduce((a,b) => {
                return a + b.total;
            }, 0)
            points.push(total)
        } else {
            points.push(0);
        }
    });

    const dataFrame = {
        labels: labels.map(l => l.nombre),
        datasets: [{
          label: 'Ingresos x Rubro',
          data: points,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 105, 132)',
            'rgb(54, 162, 100)',
            'rgb(90, 205, 86)'

          ],
          hoverOffset: 4
        }]
      };


    return(
        <Card border='light'>
            <Card.Body>
                <h2>Ingresos</h2>
                <Doughnut data={dataFrame}/>
            </Card.Body>
        </Card>

    )

}

export default Ingresos;