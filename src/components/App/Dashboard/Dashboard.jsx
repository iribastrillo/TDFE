import { useState } from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

import dashboard from '../../../assets/img/dashboard.jpg';
import Navigation from './Navbar';


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
                        <Button onClick={handleShow} className='expand' variant='success'>+</Button>
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
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Agregar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Container>
    )
}

export default Dashboad;