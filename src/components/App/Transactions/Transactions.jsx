import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import dashboard from '../../../assets/img/transactions.jpg';
import Navigation from '../Dashboard/Navbar';


const Transactions = () => {
    return (
        <Container fluid>
            <Navigation></Navigation>
            <Container>
                <Row>
                    <Col>
                        <h1>Mis movimientos</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={dashboard} className='hero'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className='expand' variant='success'>+</Button>
                    </Col>
                    <Col>
                        <Button className='expand' variant='danger'>-</Button>
                    </Col>
                </Row>
                <Row>
                    <Col><h2>Mis movimientos</h2></Col>
                </Row>
                <Row>
                    <Col>
                        <Card border='light' className='light-pink'>
                            <Card.Body>Chart</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card border='light' className='light-pink'>
                            <Card.Body>Chart</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card border='light'>
                            <Card.Body>Chart</Card.Body>
                        </Card>
                    </Col>
                </Row><Row>
                    <Col>
                        <Card border='light'>
                            <Card.Body>Chart</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Transactions;