import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignInForm = () => {

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
            <Form.Control type="email" placeholder="Ingresá tu usuario" />
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

        <Form.Group className="mb-3" controlId="confirm">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control type="password" placeholder="Repetí tu contraseña" />
            <Form.Text className="text-danger">
                {passwordErrorMessage}
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId='city'>
            <Form.Label>Ciudad</Form.Label>
            <Form.Select>
                <option>Opción falsa</option>
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId='district'>
            <Form.Label>Departamento</Form.Label>
            <Form.Select>
                <option>Opción falsa</option>
            </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={validate}>
            Registrate
        </Button>
        
        </Form>
    );
}

export default SignInForm;