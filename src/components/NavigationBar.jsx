import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <Navbar expand="sm" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">About</Nav.Link>
                        <Nav.Link href="">Skills</Nav.Link>
                        <Nav.Link href="">Projects</Nav.Link>
                        <Nav.Link href="">Services</Nav.Link>
                        <Nav.Link href="">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
