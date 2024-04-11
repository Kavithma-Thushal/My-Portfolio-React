import { Container, Navbar, Nav } from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <Navbar expand="md" className='mt-4'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">About</Nav.Link>
                        <Nav.Link href="">Skills</Nav.Link>
                        <Nav.Link href="">Certificates</Nav.Link>
                        <Nav.Link href="">Projects</Nav.Link>
                        <Nav.Link href="">Services</Nav.Link>
                        <Nav.Link href="">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
