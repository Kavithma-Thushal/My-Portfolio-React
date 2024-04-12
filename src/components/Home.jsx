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
                    <a><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=25&pause=1000&random=false&width=280&height=40&lines=Software+Engineer" alt="Typing SVG" /></a><br />
                    <Button className='btn-profile'>HIRE ME</Button>
                </Col>
            </Row>
        </Container>
    );
}