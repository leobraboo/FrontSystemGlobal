import { Button, Col, Row, Card, Form, Accordion } from 'react-bootstrap';
import { ContentButton } from '../styles';
import { DiagAccordion } from './styles';

export function DiagnosisClient() {
  return (
    <div>
      <Form.Select className="mb-3">
        <option>Cliente</option>
        <option value="1">...</option>
      </Form.Select>

      <DiagAccordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Diagnostico Perto</Accordion.Header>
          <Accordion.Body style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Card style={{ width: '45%' }}>
              <Card.Body>
                <Card.Title>OLHO ESQUERDO</Card.Title>
                <Form>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Esférico </Form.Label>
                      <Form.Control style={{ height:"30px" }}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Cilindrico </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Eixo </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Adição </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> DNP </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> ACO </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <Card style={{ width: '45%' }}>
              <Card.Body>
                <Card.Title>OLHO DIREITO</Card.Title>
                <Form>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Esférico </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Cilindrico </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Eixo </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Adição </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> DNP </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> ACO </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
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
            <Card style={{ width: '45%' }}>
              <Card.Body>
                <Card.Title>OLHO ESQUERDO</Card.Title>
                <Form>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Esférico </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Cilindrico </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Eixo </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Adição </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> DNP </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> ACO </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
            <Card style={{ width: '45%' }}>
              <Card.Body>
                <Card.Title>OLHO DIREITO</Card.Title>
                <Form>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Esférico </Form.Label>
                      <Form.Control style={{ height:"30px" }}  />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Cilindrico </Form.Label>
                      <Form.Control style={{ height:"30px" }}  />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Eixo </Form.Label>
                      <Form.Control style={{ height:"30px" }}  />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> Adição </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> DNP </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Label style={{ fontSize: "12px" }}> ACO </Form.Label>
                      <Form.Control style={{ height:"30px" }} />
                    </Form.Group>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </DiagAccordion>
      <ContentButton>
        <Button size="sm" variant="primary">
          Limpar
        </Button>
        <Button size="sm" variant="primary">
          Cadastrar
        </Button>
      </ContentButton>
    </div>

  )
}