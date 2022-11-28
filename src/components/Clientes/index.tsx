import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ContentClient } from './styles';

export function Fcliente() {
  return (
    <ContentClient>
      <Form style={{ marginTop: "100px" }}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>CPF/CNPJ</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Endereço</Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Bairro</Form.Label>
          <Form.Control placeholder="" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Cidade</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Estado</Form.Label>
            <Form.Select defaultValue="Selecione...">
              <option>Selecione...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>CEP</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>
        <Button variant="primary" type="button">
          Cadastrar
        </Button>
      </Form>
    </ContentClient>
  );
}
