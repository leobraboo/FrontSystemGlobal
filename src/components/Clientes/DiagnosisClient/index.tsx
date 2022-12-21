import { Button, Col, Row, Card, Form, Accordion } from 'react-bootstrap';
import { DiagAccordion } from './styles';

export function DiagnosisClient() {
  return (
    <div>
      <DiagAccordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Clientes cadastrados</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group>
                  <Form.Label>CPF/CNPJ</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Form.Group>
                <Form.Label>Endereço</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bairro</Form.Label>
                <Form.Control />
              </Form.Group>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>CEP</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Produtos Cadastrados</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group>
                  <Form.Label>Nome</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group>
                  <Form.Label>CPF/CNPJ</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Form.Group>
                <Form.Label>Endereço</Form.Label>
                <Form.Control />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bairro</Form.Label>
                <Form.Control />
              </Form.Group>
              <Row>
                <Form.Group as={Col}>
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>CEP</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </DiagAccordion>

    </div>

  )
}