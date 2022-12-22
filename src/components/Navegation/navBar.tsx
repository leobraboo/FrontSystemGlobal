import { Button, Stack , Form } from "react-bootstrap";
import { NavContainer, CSearch } from "./styles";

export function NavBar() {
  return (
    <>
      <NavContainer>
        <CSearch direction="horizontal" gap={3}>
          <Form.Control className="me-auto" placeholder="Pesquisar" />
          <Button variant="secondary">Pesquisar</Button>
        </CSearch>
      </NavContainer>
    </>
  )
}