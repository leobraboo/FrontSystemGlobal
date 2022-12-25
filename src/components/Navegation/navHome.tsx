import {
  IoChevronForward, IoPersonAdd,
  IoStorefrontOutline, IoReaderOutline, IoStatsChartSharp,
  IoSettingsOutline, IoCartOutline, IoCashOutline,
  IoDocumentTextOutline, IoHeadset, IoLogOutOutline
} from "react-icons/io5";
import { TbTruck } from "react-icons/tb";

import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container, Content, IconButton,
  ButtonStyle, TextButton, UserContainer, FormStyle
} from "./styles";


interface NavHomeProps {
  colapse: boolean;
}

export function NavHome({ colapse }: NavHomeProps) {
  const [open, setOpen] = useState(false);
  return (
    <div  >
      <Container>
        <UserContainer>
          <IconButton style={{ width: open ? "180px" : "30px", transition: "ease-in 500ms" }} onClick={() => setOpen(!open)} >
            <IoChevronForward style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "ease-in 500ms" }} onClick={() => setOpen(!open)} size={30} />
          </IconButton>
        </UserContainer>
        <Content style={{ width: open ? "180px" : "40px", transition: "ease-in 500ms" }}>
          <ButtonStyle as={Link} to="/Clients" >
            <IconButton> <IoPersonAdd size={22} /> </IconButton>
            <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Clientes </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Products">
            <IconButton> <IoCartOutline size={25} /> </IconButton>
            <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Produtos </TextButton>
          </ButtonStyle>

          {/* <FormStyle>
            <IoStorefrontOutline size={30} />
            <Form.Select style={{ background: "#1C1C1C", border: "none", color: "white" }}>
              <option>
                <TextButton as={Link} to="/Sales" style={{ display: open ? "block" : "none" }}> Vendas </TextButton>
              </option>
              <option>
                <ButtonStyle as={Link} to="/Products">
                  <TextButton style={{ display: open ? "block" : "none" }}> Produtos </TextButton>
                </ButtonStyle>
              </option>
            </Form.Select>
          </FormStyle> */}

          <ButtonStyle as={Link} to="/Sales">
            <IconButton> <IoStorefrontOutline size={25} /> </IconButton>
            <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Vendas </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/NoteFiscale">
            <IconButton> <IoReaderOutline size={25} /> </IconButton>
            <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Nota fiscal </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Financial">
            <IconButton> <IoCashOutline size={25} /> </IconButton>
            <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Financeiro </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Grafics">
            <IconButton> <IoStatsChartSharp size={25} /> </IconButton>
            <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Gráficos </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Carrying">
            <IconButton> <TbTruck size={25} /> </IconButton>
            <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Transportadora </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Reports">
            <IconButton> <IoDocumentTextOutline size={25} /> </IconButton>
            <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Relátorios </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Configs">
            <IconButton> <IoSettingsOutline size={25} /> </IconButton>
            <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Configurações </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Clients">
            <IconButton> <IoHeadset size={25} /> </IconButton>
            <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Suporte </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Clients">
            <IconButton> <IoLogOutOutline size={25} /> </IconButton>
            {colapse ? (
              <TextButton style={{ fontSize: open ? "16px" : "0px", transition: "ease-in 500ms" }}> Sair </TextButton>
            ) : <></>
            }
          </ButtonStyle>

        </Content>
      </Container>
    </div>
  )
}