import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './LoginForm.css';

const LoginForm = (props) => {

    const [usernameErrorMessage, setUsernameErrorMessage] = useState ('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState ('');

    function validate () {
        setUsernameErrorMessage ('Reacciono');
        setPasswordErrorMessage ('Error en la contraseña');
    }

    return (
        <Form>
        <Form.Group className="mb-12" controlId="username">
            <Form.Label>Usuario</Form.Label>
            <Form.Control type="email" placeholder="Ingresá tu usuario..." />
            <Form.Text className="text-danger">
                {usernameErrorMessage}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresá tu contraseña" />
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