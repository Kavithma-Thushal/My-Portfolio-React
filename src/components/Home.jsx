import { Container, Row, Col, Button } from 'react-bootstrap';
import Profile from "../assets/images/profile.jpg";

export default function Home() {
    return (
        <Container fixed="top">
            <Row>
                <Col md={4} className='profile'>
                    <img src={Profile} alt="Profile" className="img-fluid rounded-circle" />
                </Col>
                <Col md={4} className='txt-profile'>
                    <h1 className="text-white">I'm Kavithma Thushal</h1>
                    <h2 className="text-white">FullStack Engineer</h2>
                    <Button variant="primary">Hire Me</Button>
                </Col>
            </Row>
        </Container>
    );
}