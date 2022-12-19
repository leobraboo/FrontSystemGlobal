import { Button, Card, Form, Tabs, Tab , Stack } from 'react-bootstrap';
import { RegisterProduct } from './RegisterProduct';
import { ContentProduct } from './styles';

export function FProducts() {
  return (
    <ContentProduct>
      <Card style={{ marginTop: "50px", width: "80%" }}>
        <Card.Body>
          <Tabs
            defaultActiveKey="register"
            className="mb-3"
          >
            <Tab eventKey="register" title="Cadastro">
              <RegisterProduct />
            </Tab>
            <Tab eventKey="search" title="Pesquisar">
              <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Pesquisar" />
                <Button variant="secondary">Pesquisar</Button>
              </Stack>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </ContentProduct >
  )
}