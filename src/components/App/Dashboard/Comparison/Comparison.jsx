import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

const Comparison = () => {
    const transactions = useSelector((state) => state.transactions.value);
    const categories = useSelector ((state) => state.categories.value);

    let tr = [...transactions];

    let sorted = tr.sort (function (a, b) {
        return new Date (a.fecha) - new Date (b.fecha);
    })

    let last = sorted.pop ();
    let filtered = sorted.filter (element => element.categoria === last.categoria);
    let before = filtered.pop();
    let difference = last.total - before.total;
    let category = categories.filter ((element) => element.id === last.categoria)[0];
    
    return(
        <Card className="mb-10" border='light'>
            <Card.Body>
                <h2>Última transacción:</h2>
                <p>
                    {`Para el rubro ${category.nombre}, en la última compra has gastado $${difference} más que en la penúltima.`}
                </p>
            </Card.Body>
        </Card>

    )
}

export default Comparison;