import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import dashboard from '../../../assets/img/transactions.jpg';
import Navigation from '../Dashboard/Navbar';
import Line from './Line/Line';
import TransactionModal from '../TransactionModal/TransactionModal';
import { notifySuccess } from '../../../app/toasts';
import FilterTransactions from './FilterTransactions/FilterTransactions';
import getTransactions from '../../../services/dwallet/getTransactions';
import getCategories from '../../../services/dwallet/getCategories';
import { setTransactions } from '../../../app/transactions';
import { setCategories } from '../../../app/categories';


const Transactions = () => {
    const [show, setShow] = useState (false);
    const toast = useSelector ((state) => state.toast.value)
    const loginUser = useSelector ((state) => state.session.value);
    const transactions = useSelector(state => state.transactions.filteredTr);
    const dispatch = useDispatch ();

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
    

    function toastOff () {
        dispatch (notifySuccess(false));
    }

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
                <Row className='mt-10'>
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
                        <Toast bg='success' className='expand mb-10' onClose={toastOff} show={toast} delay={5000} autohide>
                            <Toast.Header>
                                <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                                />
                                <strong className="me-auto">¡Un éxito!</strong>
                                <small>Ahora mismo</small>
                            </Toast.Header>
                            <Toast.Body>El movimiento se agregó a la lista.</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={handleShow} className='button indigo mb-10'> 
                            Agregar un movimiento
                        </button>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <FilterTransactions/>
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