import { Container, Row, Col } from 'react-bootstrap';
import ComputershopManagementSystem from "../assets/images/ComputershopManagementSystem.png";

export default function Projects() {
    return (
        <Container>
            <h1 className="txt-head">My Projects</h1>
            <Row>
                <Col lg={12}>
                    <div className="project-border">
                        <img className='project-img' src={ComputershopManagementSystem} alt="Computershop Management System" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
