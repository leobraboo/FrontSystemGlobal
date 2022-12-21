import {Accordion} from 'react-bootstrap';
import { StyledAccordion } from './styles';

export function AccordionGeneral() {
  return (
    <div>
    <StyledAccordion defaultActiveKey="0"  style={{ width: "70vw", height: "auto" }}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Clientes cadastrados</Accordion.Header>
        <Accordion.Body>
         Aqui vou colocar um card com cliente
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Produtos Cadastrados</Accordion.Header>
        <Accordion.Body>
          Aqui vai outro card com produto
        </Accordion.Body>
      </Accordion.Item>
    </StyledAccordion>

    </div>
  );
}