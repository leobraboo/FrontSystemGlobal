import { Button, Col, Row, Card, Form } from 'react-bootstrap';

export function RegisterProduct() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Nome</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Código Referência</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Valor</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Valor de Venda</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Unidade</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col}>
          <Form.Label>Estoque</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Estoque Minímo</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Código de Barras</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className='mb-3'>
        <Form.Label>Descrição</Form.Label>
        <Form.Control as="textarea" style={{ height:"100px" }} />
      </Form.Group>
      <Button variant="primary" type="button">
        Cadastrar
      </Button>
    </Form>
  )
}