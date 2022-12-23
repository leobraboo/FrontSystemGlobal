import { Button, Card, Form, Tabs, Tab , Stack } from 'react-bootstrap';
import { DiagnosisClient } from './DiagnosisClient';
import { RegisterClient } from './RegisterClient';
import { ContentClient } from './styles';

export function CClient() {
  return (
    <ContentClient>
      <Card style={{ marginTop: "70px", width: "80%", height: "auto" }}>
        <Card.Body>
          <Tabs
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
          </Tabs>
        </Card.Body>
      </Card>
    </ContentClient >
  );
}
