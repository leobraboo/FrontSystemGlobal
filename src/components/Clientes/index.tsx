import { Button, Card, Form, Tabs, Tab, Stack, Row, Col, Nav } from 'react-bootstrap';
import { DiagnosisClient } from './DiagnosisClient';
import { RegisterClient } from './RegisterClient';
import { ContentClient } from './styles';

export function CClient() {
  return (
    <ContentClient>
      <Card style={{ marginTop: "90px", width: "80%", height: "85vh" }}>
        <Card.Body>
          {/* <Tabs
            defaultActiveKey="register"
            className="mb-3"
          >
            <Tab eventKey="register" title="Cadastro">
              <RegisterClient />
            </Tab>
            <Tab eventKey="diagnosis" title="Diagnostico">
              <DiagnosisClient />
            </Tab>
            <Tab eventKey="search" title="Pesquisar">
              <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Pesquisar" />
                <Button variant="secondary">Pesquisar</Button>
              </Stack>
            </Tab>
          </Tabs> */}
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Cadastro</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Diagnostico</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="terciary">Pesquisar</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <RegisterClient />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <DiagnosisClient />
                  </Tab.Pane>
                  <Tab.Pane eventKey="terciary">
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
    </ContentClient >
  );
}
