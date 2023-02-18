import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import dashboard from '../../../assets/img/dashboard.jpg';
import Navigation from './Navbar';
import TransactionModal from '../TransactionModal/TransactionModal';
import getTransactions from '../../../services/dwallet/getTransactions';
import getCategories from '../../../services/dwallet/getCategories';
import { setTransactions } from '../../../app/transactions';
import { setCategories } from '../../../app/categories';
import Total from './Total/Total';
import Charts from './Charts/Charts';

const Dashboad = () => {
    const [show, setShow] = useState (false);
    const loginUser = useSelector ((state) => state.session.value);

    const dispatch = useDispatch();

    useEffect (() => {
        getTransactions(loginUser)
            .then(data => {
                dispatch(setTransactions(data.movimientos))
            })
        getCategories(loginUser)
            .then(data => {
                dispatch(setCategories(data.rubros))
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                        <Total/>
                    </Col>
                </Row>
                <Charts/>
                <Row>
                    <Col>
                        <h2>Comparativa con 2022</h2>
                        <Card border='light'>
                            <Card.Body>Chart</Card.Body>
                        </Card>
                    </Col>
                </Row>
                <TransactionModal show={show} handleClose={handleClose}/>
            </Container>
        </Container>
    )
}

export default Dashboad;