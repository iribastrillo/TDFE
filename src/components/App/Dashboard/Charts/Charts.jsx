import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Ingresos from "./Ingresos/Ingresos";
import Gastos from "./Gastos/Gastos";
import Evolucion from "./Evolucion/Evolucion";


const Charts = () => {
    const transactions = useSelector ((state) => state.transactions.value);
    const categories = useSelector(state => state.categories.value);
    const ingresos = transactions.filter(tr => tr.categoria > 6);
    const gastos = transactions.filter(tr => tr.categoria <= 6);

    return(
        <>
        <Row>
            <Col>
                <Ingresos data={ingresos} categories={categories}/>
            </Col>
            <Col>
                <Gastos data={gastos} categories={categories}/>
            </Col>
        </Row>
        <Row>
            <Col>
                <Evolucion transactions={gastos}/>
            </Col>
        </Row>
        </>
    )
}

export default Charts