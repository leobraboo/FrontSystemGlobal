import { Button, Card, Form, Tab, Stack, Row, Col, Nav } from 'react-bootstrap';
import { ContentSale } from './styles';
import { IoGlasses, IoSearch } from "react-icons/io5";
import { RegisterProduct } from '../Products/RegisterProduct';

export function CSales() {
  return (
    <ContentSale>
      <Card style={{ marginTop: "90px", width: "80%", height: "80vh" }}>
        <Card.Body>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <IoGlasses size={30} style={{ marginRight:"10px" }}/>
                      Cadastro
                      </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                    <IoSearch size={30} style={{ marginRight:"10px" }}/>
                      Pesquisar
                      </Nav.Link>
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
    </ContentSale >
  )
}