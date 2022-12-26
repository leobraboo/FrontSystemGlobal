import { useContext } from 'react';
import { Button, Col, Row, Card, Form } from 'react-bootstrap';
import { IClient } from '../../../interface/IClient';
import { ClientContext } from '../../../shared/Context/ClientContext';
import { GlobalContext } from '../../../shared/Context/globalContext';
import { ContentButton } from '../styles';

export function RegisterClient() {
  const { handleChange } = useContext( ClientContext ) as { handleChange: React.ChangeEventHandler }

  const { client } = useContext(GlobalContext) as { client: IClient }

  return (
    <Card style={{ width: "100%", height: "auto" }}>
      <Card.Body>
        <Form>
        <Form.Group as={Col}>
              <Form.Control onChange={handleChange} hidden name='id' value={client.id || ""} type="text" />
            </Form.Group>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Nome</Form.Label>
              <Form.Control onChange={handleChange} name='nome' value={client.nome || ""} type="text" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>CPF/CNPJ</Form.Label>
              <Form.Control onChange={handleChange} name='cpfCnpj' value={client.cpfCnpj || ""} type="text" />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label>Endereço</Form.Label>
            <Form.Control onChange={handleChange} name='endereco' value={client.endereco || ""} />
          </Form.Group>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Numero</Form.Label>
              <Form.Control onChange={handleChange} name='numero' value={client.numero || ""} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Complemento</Form.Label>
              <Form.Control onChange={handleChange} name='complemento' value={client.complemento || ""} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Bairro</Form.Label>
              <Form.Control onChange={handleChange} name='bairro' value={client.bairro || ""} />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Cidade</Form.Label>
              <Form.Control onChange={handleChange} name='cidae' value={client.cidade || ""} />
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
              <Form.Control onChange={handleChange} name='cep' value={client.cep || ""} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Telefone</Form.Label>
              <Form.Control onChange={handleChange} name='telefone' value={client.telefone || ""} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Celular</Form.Label>
              <Form.Control onChange={handleChange} name='celular' value={client.celular || ""} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control onChange={handleChange} name='email' value={client.email || ""} />
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