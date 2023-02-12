import { useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './LoginForm.css';
import { login } from '../../../../services/dwallet/login';
import { setLoggedInUser } from '../../../../app/session';


const LoginForm = () => {
    const username = useRef ('');
    const password = useRef ('');

    const dispatch = useDispatch ();
    const user = useSelector ((state) => state.session.value)

    function handleSubmit (event) {
        event.preventDefault();
        const payload = {
            "usuario" : username.current.value,
            "password" : password.current.value
        }
        login (payload).then ((user) => {
            dispatch (setLoggedInUser(user))
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-12">
            <Form.Label htmlFor='username'>Usuario</Form.Label>
            <Form.Control ref={username} name='username' type="text" placeholder="Ingresá tu usuario..." />
            <Form.Text className="text-danger">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label htmlFor='password'>Contraseña</Form.Label>
            <Form.Control ref={password} name='password' type="password" placeholder="Ingresá tu contraseña" />
            <Form.Text className="text-danger">
            </Form.Text>
        </Form.Group>

        <div className='d-grid'>
            <Button variant="primary" type="submit" size='lg'>
                Ingresá
            </Button>
            <p>Quiero registrarme</p>
        </div>
    
        </Form>
    );
}

export default LoginForm;