import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = (props) => {

    const [usernameErrorMessage, setUsernameErrorMessage] = useState ('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState ('');

    function validate () {
        setUsernameErrorMessage ('Reacciono');
        setPasswordErrorMessage ('Error en la contraseña');
    }

    return (
        <Form>
        <Form.Group className="mb-12" controlId="formBasicEmail">
            <Form.Label htmlFor="username">Usuario</Form.Label>
            <Form.Control name='username' type="email" placeholder="Ingresá tu usuario..." />
            <Form.Text className="text-danger">
                {usernameErrorMessage}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="username">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresá tu contraseña" />
            <Form.Text className="text-danger">
                {passwordErrorMessage}
            </Form.Text>
        </Form.Group>

        <div className='dgrid'>
            <Button variant="primary" type="submit" onClick={validate}>
                Ingresá
            </Button>
        </div>
        
        </Form>
    );
}

export default LoginForm;