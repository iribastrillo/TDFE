import { Col, Row, Card, Badge, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import {deleteTransaction} from "../../../../services/dwallet/deleteTransaction";
import {deleteTransactionById} from "../../../../app/transactions"
import getCategories from "../../../../services/dwallet/getCategories";
import { setCategories } from "../../../../app/categories";
import { useEffect } from "react";

const Line = ({transaction}) => {

    const categories = useSelector(state => state.categories.value)
    const user = useSelector(state => state.session.value);
    const cat = categories.filter(cat => cat.id === transaction.categoria)
    const dispatch = useDispatch();
    
    // console.log(transaction)

    useEffect(() => {
        getCategories(user)
        .then(data => {
            dispatch(setCategories(data.rubros))
        })
    }, [])    



    const handleClick = () => {
        const payload = {
            "idMovimiento": transaction.id,
            "apiKey": user.apiKey,
        }

        deleteTransaction(payload)
            .then(data => {
                dispatch(deleteTransactionById(data.idMovimiento))
            })


    }


    return (
        <>
            <Row>
                <Col>
                    <Card className="mb-10" border='light'>
                        <Card.Body>
                            <div className="flex space-between middle">
                                <div>
                                    <img src={`https://dwallet.develotion.com/imgs/${cat[0].imagen}`} alt="" />
                                    <span>{transaction.concepto}</span>
                                    <span> {cat[0].nombre}</span>
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
        </>

    )
}

export default Line;