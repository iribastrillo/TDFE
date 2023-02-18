import { useEffect, useRef, useState } from 'react';
import {useDispatch} from 'react-redux';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './LoginForm.css';
import { login } from '../../../../services/dwallet/login';
import { setLoggedInUser } from '../../../../app/session';

import {isEmpty} from '../../../../utils/utils';
import getCategories from '../../../../services/dwallet/getCategories';
import { setCategories } from '../../../../app/categories';
import { setTransactions } from '../../../../app/transactions';
import getTransactions from '../../../../services/dwallet/getTransactions';

const LoginForm = () => {
    const [forbidLogin, setForbidLogin] = useState (true)
    const [errorMessage, setErrorMessage] = useState ('');
    const username = useRef ('');
    const password = useRef ('');
    const loginUser = useSelector((state) => state.session.value)
    const dispatch = useDispatch ();
    const navigator = useNavigate();

    useEffect (() => {
        runLoginValidations ();
    }, []);

    function runLoginValidations () {
        if (!isEmpty(username.current.value) && !isEmpty (password.current.value)) {
            setForbidLogin (false);
        } else {
            setForbidLogin (true);
        }
    }

    function handleSubmit (event) {
        event.preventDefault();
        const payload = {
            "usuario" : username.current.value,
            "password" : password.current.value
        }
        login (payload)
            .then ((user) => {
                dispatch (setLoggedInUser(user))
                setErrorMessage('');
                navigator ('/dashboard'); 
            })
            .catch ((rsp) => {
                setErrorMessage(rsp.mensaje);
            })
        getTransactions(loginUser)
            .then(data => {
                dispatch(setTransactions(data.movimientos))
            })
        getCategories(loginUser)
            .then(data => {
                dispatch(setCategories(data.rubros))
        })
        
        

    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-12">
            <Form.Label htmlFor='username'>Usuario</Form.Label>
            <Form.Control onChange={runLoginValidations} ref={username} name='username' type="text" placeholder="Ingresá tu usuario..." />
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label htmlFor='password'>Contraseña</Form.Label>
            <Form.Control onChange={runLoginValidations} ref={password} name='password' type="password" placeholder="Ingresá tu contraseña" />
        </Form.Group>
        <Form.Group>
            <Form.Text className="text-danger">
                {errorMessage}
            </Form.Text>
        </Form.Group>
        
        <input className='button indigo' type='submit' disabled={forbidLogin} value='Ingresá'/>

        <div className='text-center'>
            <Link to='/signin'>Quiero registrarme</Link>
        </div>
    
        </Form>
    );
}

export default LoginForm;