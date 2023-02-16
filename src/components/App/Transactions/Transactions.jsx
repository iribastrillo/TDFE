import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import dashboard from '../../../assets/img/transactions.jpg';
import Navigation from '../Dashboard/Navbar';
import Line from './Line/Line';
import getTransactions from '../../../services/dwallet/getTransactions';
import TransactionModal from '../TransactionModal/TransactionModal';

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
                        <button onClick={handleShow} className='button indigo'> 
                            Agregar un movimiento
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col><h2>Mis movimientos</h2></Col>
                </Row>

                {transactions.map ((transaction) => <Line transaction={transaction} key={transaction.id}/>)}

                <TransactionModal show={show} handleClose={handleClose}/>
  
            </Container>
        </Container>
    )
}

export default Transactions;