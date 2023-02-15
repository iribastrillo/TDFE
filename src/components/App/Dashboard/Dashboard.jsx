import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

import dashboard from '../../../assets/img/dashboard.jpg';
import Navigation from './Navbar';
import AddTransactionForm from './AddTransactionForm/AddTransactionForm';

const Dashboad = () => {
    const [show, setShow] = useState (false);

    function handleShow () {
        setShow (true);
    }
    function handleClose () {
        setShow (false);
    }

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
                        <button onClick={handleShow} className='button indigo'> 
                            Agregar un movimiento
                        </button>
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
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Agregar un movimiento</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddTransactionForm/>
                    </Modal.Body>
                </Modal>
            </Container>
        </Container>
    )
}

export default Dashboad;