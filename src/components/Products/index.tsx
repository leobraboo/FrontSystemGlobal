import { Button, Card, Form, Tabs, Tab, Stack, Row, Col, Nav } from 'react-bootstrap';
import { RegisterProduct } from './RegisterProduct';
import { ContentProduct } from './styles';

export function CProducts() {
  return (
    <ContentProduct>
      <Card style={{ marginTop: "90px", width: "80%", height: "80vh" }}>
        <Card.Body>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Cadastro</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Pesquisar</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <RegisterProduct />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Stack direction="horizontal" gap={3}>
                      <Form.Control className="me-auto" placeholder="Pesquisar" />
                      <Button variant="secondary">Pesquisar</Button>
                    </Stack>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card.Body>
      </Card>
    </ContentProduct >
  )
}