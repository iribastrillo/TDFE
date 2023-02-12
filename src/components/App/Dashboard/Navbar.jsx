import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"


const Navigation = () => {
    return (
        <Navbar className="rounded indigo" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Obligatorio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Mis movimientos</Nav.Link>
                        <Nav.Link href="#link">Salir</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;