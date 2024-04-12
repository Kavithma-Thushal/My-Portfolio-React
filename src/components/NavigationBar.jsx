import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default function NavigationBar() {
    return (
        <Navbar expand="md" className='mt-4'>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">About</Nav.Link>
                        <NavDropdown title="Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Skills</NavDropdown.Item>
                            <NavDropdown.Item href="">Certificates</NavDropdown.Item>
                            <NavDropdown.Item href="">My Projects</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">Team Members</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="">Clients</NavDropdown.Item>
                            <NavDropdown.Item href="">Pricing</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">My Services</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="">Contacts</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
