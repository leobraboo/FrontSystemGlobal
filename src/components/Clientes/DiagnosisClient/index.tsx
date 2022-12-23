import { Button, Col, Row, Card, Form, Accordion } from 'react-bootstrap';
import { DiagAccordion } from './styles';

export function DiagnosisClient() {
  return (
    <div>
      <DiagAccordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Diagnostico Perto</Accordion.Header>
          <Accordion.Body style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Diagnostico Perto</Card.Title>
                <Form>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Olho direito</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Olho esquerdo</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Diagnostico Longe</Card.Title>
                <Form>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Olho direito</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Olho esquerdo</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Diagnostico Longe</Accordion.Header>
          <Accordion.Body style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Diagnostico Perto</Card.Title>
                <Form>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Olho direito</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Olho esquerdo</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Diagnostico Longe</Card.Title>
                <Form>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label>Olho direito</Form.Label>
                      <Form.Control />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label>Olho esquerdo</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </DiagAccordion>

    </div>

  )
}