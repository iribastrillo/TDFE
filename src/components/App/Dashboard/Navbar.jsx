import { Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';


import { logOut } from "../../../app/session";


const Navigation = () => {
    const dispatch = useDispatch ();
    const navigator = useNavigate ();

    function handleLogOut () {
        dispatch (logOut());
        navigator ('/');
    }


    return (
        <Navbar className="indigo" expand="lg">
            <Container>
                <Navbar.Brand className="brand" href="#home">Grow</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to='/dashboard'><Nav.Link href="#home">Dashboard</Nav.Link></Link>
                        <Link to='/transactions'><Nav.Link href="#home">Mis movimientos</Nav.Link></Link>
                        <Link to='/'><Nav.Link onClick={handleLogOut}>Salir</Nav.Link></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;