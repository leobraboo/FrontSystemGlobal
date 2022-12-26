import { Button, Col, Row, Card, Form } from 'react-bootstrap';
import { ContentButton } from '../styles';

export function RegisterClient() {
  return (
    <Card style={{ width: "100%", height: "auto" }}>
      <Card.Body>
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>CPF/CNPJ</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label>Endereço</Form.Label>
            <Form.Control />
          </Form.Group>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Numero</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Complemento</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Bairro</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Cidade</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Estado</Form.Label>
              <Form.Select defaultValue="Selecione...">
                <option>Selecione...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>CEP</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Telefone</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Celular</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
          <ContentButton>
            <Button size="sm" variant="primary">
              Limpar
            </Button>
            <Button size="sm" variant="primary">
              Cadastrar
            </Button>
          </ContentButton>
        </Form>
      </Card.Body>
    </Card>
  )
}