import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import dashboard from '../../../assets/img/transactions.jpg';
import Navigation from '../Dashboard/Navbar';
import Line from './Line/Line';
import getTransactions from '../../../services/dwallet/getTransactions';


const Transactions = () => {
    const [transactions, setTransactions] = useState ([]);
    const [show, setShow] = useState (false);
    const loggedInUser = useSelector ((state) => state.session.value);

    useEffect (() => {
        getTransactions (loggedInUser).then ((data) => {
            setTransactions (data.movimientos);
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                        <Button onClick={handleShow} className='expand' variant='success'>+</Button>
                    </Col>
                    <Col>
                        <Button className='expand' variant='danger'>-</Button>
                    </Col>
                </Row>
                <Row>
                    <Col><h2>Mis movimientos</h2></Col>
                </Row>
                {transactions.map ((transaction) => <Line transaction={transaction}/>)}
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

export default Transactions;