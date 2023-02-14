import { Container, Nav, Navbar } from "react-bootstrap"
import { useDispatch } from "react-redux";

import { logOut } from "../../../app/session";


const Navigation = () => {
    const dispatch = useDispatch ();

    function handleLogOut () {
        dispatch (logOut());
    }


    return (
        <Navbar className="rounded indigo" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Obligatorio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Mis movimientos</Nav.Link>
                        <Nav.Link onClick={handleLogOut}>Salir</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;