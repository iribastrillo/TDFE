import { Col, Row, Card } from "react-bootstrap"

const Line = (props) => {
    return (
        <Row>
            <Col>
                <Card border='light' className='light-pink'>
                    <Card.Body>{props.transaction.concepto}{props.transaction.total}</Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Line;