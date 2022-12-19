import { Button, Col, Row, Card, Form } from 'react-bootstrap';

export function RegisterProduct(){
  return(
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Valor</Form.Label>
        <Form.Control type="text" placeholder="" />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress1">
      <Form.Label>Valor de Venda</Form.Label>
      <Form.Control placeholder="" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Unidade</Form.Label>
      <Form.Control placeholder="" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>Descrição</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Código de Barras</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Código Referência</Form.Label>
      <Form.Control placeholder="" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Estoque</Form.Label>
      <Form.Control placeholder="" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridAddress2">
      <Form.Label>Estoque Minímo</Form.Label>
      <Form.Control placeholder="" />
    </Form.Group>
    <Button variant="primary" type="button">
      Cadastrar
    </Button>
  </Form>
  )
}