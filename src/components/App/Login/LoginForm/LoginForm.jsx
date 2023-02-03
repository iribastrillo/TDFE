import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const LoginForm = () => {
    return (
        <Form>
        <Form.Group className="mb-12" controlId="formBasicEmail">
            <Form.Label htmlFor="username">Usuario</Form.Label>
            <Form.Control name='username' type="email" placeholder="Ingresá tu usuario..." />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="username">Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingresá tu contraseña" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
            Ingresá
        </Button>
        </Form>
    );
}

export default LoginForm;