import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './LoginForm.css';
import { login } from '../../../../services/dwallet/login';


const LoginForm = () => {
    const [usernameErrorMessage, setUsernameErrorMessage] = useState ('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState ('');

    function validate () {
        setUsernameErrorMessage ('Reacciono');
        setPasswordErrorMessage ('Error en la contraseña');
    }

    function handleSubmit (event) {
        event.preventDefault();
        const payload = {
            username : event.target.username.value,
            password: event.target.password.value,
        }
        login (payload).then ((user) => {
            return console.log (user);
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-12">
            <Form.Label htmlFor='username'>Usuario</Form.Label>
            <Form.Control name='username' type="text" placeholder="Ingresá tu usuario..." />
            <Form.Text className="text-danger">
                {usernameErrorMessage}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label htmlFor='password'>Contraseña</Form.Label>
            <Form.Control name='password' type="password" placeholder="Ingresá tu contraseña" />
            <Form.Text className="text-danger">
                {passwordErrorMessage}
            </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={validate}>
            Ingresá
        </Button>
        
        </Form>
    );
}

export default LoginForm;