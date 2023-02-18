import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";


const Total = () => {
    const transactions = useSelector ((state) => state.transactions.value);
    const total = transactions.reduce ((current, value) => {
        if (value.categoria > 6) {
            return current + value.total;
        } else {
            return current - value.total;
        }
    }, 0)
    const color = total >= 0 ? 'green' : 'red';

    console.log (total);


    return (
        <Card>
            <Card.Body>
                <h2>Saldo final:</h2>
                <p className={`${color} bold`}>
                    {total}
                </p>
            </Card.Body>
        </Card>
    )
}

export default Total;