import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import dashboard from '../../../assets/img/dashboard.jpg';
import Navigation from './Navbar';


const Dashboad = () => {
    return (
        <Container fluid>
            <Navigation></Navigation>
            <Container>
                <Row>
                    <Col>
                        <h1>Dashboard</h1>
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
                    <Col>
                        <h2>Ingresos</h2>
                        <Card border='light'>
                            <Card.Body>Chart</Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <h2>Gastos</h2>
                        <Card border='light'>
                            <Card.Body>Chart</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Comparativa con 2022</h2>
                        <Card border='light'>
                            <Card.Body>Chart</Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Dashboad;