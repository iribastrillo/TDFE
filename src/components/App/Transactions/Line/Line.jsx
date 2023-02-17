import { Col, Row, Card, Badge, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import {deleteTransaction} from "../../../../services/dwallet/deleteTransaction";


const Line = ({transaction}) => {

    const categories = useSelector(state => state.categories.value)
    const user = useSelector(state => state.session.value);
    const cat = categories.filter(cat => cat.id === transaction.categoria)
    //const dispatch = useDispatch();

    // console.log(transaction)

    const handleClick = () => {
        const payload = {
            "idMovimiento": transaction.id,
            "apiKey": user.apiKey,
        }

        deleteTransaction(payload)
            .then(data => {
                console.log(data);
            })


    }


    return (
        <Row>
            <Col>
                <Card className="mb-10" border='light'>
                    <Card.Body>
                        <div className="flex space-between middle">
                            <div>
                                {transaction.concepto}
                                {cat[0].tipo}
                                {cat[0].nombre}
                                {cat[0].tipo}
                                <img src={`https://dwallet.develotion.com/imgs/${cat[0].imagen}`} alt="" />

                                <Badge className="ml-10" bg='success'>{transaction.total}</Badge>
                            </div>
                            <div>
                                <Button variant="danger" onClick={handleClick}>Eliminar</Button>
                            </div>
                            
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Line;