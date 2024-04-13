import { Container, Row, Col } from 'react-bootstrap';

export default function Projects() {
    return (
        <Container>
            <h1 className="txt-head">My Projects</h1>
            <Row>
                <Col lg={12}>
                    <div className="project-border"></div>
                </Col>
            </Row>
        </Container>
    );
}
