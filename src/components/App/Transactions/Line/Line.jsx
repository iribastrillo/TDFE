import { Col, Row, Card, Badge, Button } from "react-bootstrap"

const Line = ({transaction}) => {
    return (
        <Row>
            <Col>
                <Card className="mb-10" border='light'>
                    <Card.Body>
                        <div className="flex space-between middle">
                            <div>
                                {transaction.concepto}
                                <Badge className="ml-10" bg='success'>{transaction.total}</Badge>
                            </div>
                            <div>
                                <Button variant="danger">Eliminar</Button>
                            </div>
                            
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Line;