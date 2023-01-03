import { useContext } from 'react';
import { IProducts } from '../../../interface/IProducts';
import { GlobalContext } from '../../../shared/Context/globalContext';
import { ProductContext } from '../../../shared/Context/ProductContext';

import { Button, Col, Row, Card, Form } from 'react-bootstrap';

export function RegisterProduct() {
  const { handleChange, handleSaveProducts } = useContext(ProductContext) as { handleChange: React.ChangeEventHandler, handleSaveProducts: () => void }

  const { produtos } = useContext(GlobalContext) as { produtos: IProducts }

  return (
    <Card style={{ width: "100%", height: "auto" }}>
      <Card.Body>
        <Form>
          <Form.Control onChange={handleChange} hidden defaultValue={produtos?.id || ""} name="id" type="text" />
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Nome</Form.Label>
              <Form.Control onChange={handleChange} defaultValue={produtos?.id || ""} name="id" type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Código Referência</Form.Label>
              <Form.Control onChange={handleChange} defaultValue={produtos?.codReferencia || ""} name="codReferencia" type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Valor</Form.Label>
              <Form.Control onChange={handleChange} defaultValue={produtos?.valor || ""} name="valor" type="text" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Valor de Venda</Form.Label>
              <Form.Control onChange={handleChange} defaultValue={produtos?.valorVenda || ""} name="valorVenda" type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Unidade</Form.Label>
              <Form.Control onChange={handleChange} defaultValue={produtos?.unidade || ""} name="unidade" type="text" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Estoque</Form.Label>
              <Form.Control onChange={handleChange}  defaultValue={produtos?.estoque || ""} name="estoque" type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Estoque Minímo</Form.Label>
              <Form.Control onChange={handleChange}  defaultValue={produtos?.estoqueMin || ""} name="estoqueMin" type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Código de Barras</Form.Label>
              <Form.Control onChange={handleChange}  defaultValue={produtos?.codBarras || ""} name="id" type="text" />
            </Form.Group>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" style={{ height: "100px" }} onChange={handleChange}  defaultValue={produtos?.descricao || ""} name="descricao" type="text" />
          </Form.Group>
          <Button variant="primary" type="button">
            Cadastrar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}