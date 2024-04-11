import { Container, Row, Col, Button } from 'react-bootstrap';
import Profile from "../assets/images/profile.jpg";

export default function Home() {
    return (
        <Container className="mt-5">
            <Row className="align-items-center">
                <Col md={4}>
                    <img src={Profile} alt="Profile" className="img-fluid rounded-circle" />
                </Col>
                <Col md={8}>
                    <h1 className="text-white">I'm Kavithma Thushal</h1>
                    <h2 className="text-white">FullStack Engineer</h2>
                    <Button>Hire Me</Button>
                </Col>
            </Row>
        </Container>
    );
}