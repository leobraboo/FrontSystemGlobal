import {
  IoPersonCircleOutline, IoPersonAdd,
  IoStorefrontOutline, IoReaderOutline, IoStatsChartSharp,
  IoSettingsOutline, IoCartOutline, IoCashOutline,
  IoDocumentTextOutline, IoHeadset, IoLogOutOutline
} from "react-icons/io5";
import { TbTruck } from "react-icons/tb";

import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container, Content, IconButton,
  ButtonStyle, TextButton, UserContainer
} from "./styles";


interface NavHomeProps {
  colapse: boolean;
}

export function NavHome({ colapse }: NavHomeProps) {
  const [open, setOpen] = useState(false);
  return (
    <div  >
      <Container style={{ width: open ? "200px" : "80px", transition: "ease-in 500ms" }} onClick={() => setOpen(!open)}>
        <UserContainer>
          <IconButton >
            <IoPersonCircleOutline size={60} />
            <h6 style={{ display: open ? "block" : "none" }}>BMS OPTICA</h6>
          </IconButton>
        </UserContainer>
        <Content style={{ width: open ? "180px" : "50px", transition: "ease-in 500ms" }}>
          <ButtonStyle as={Link} to="/Clients" >
            <IconButton> <IoPersonAdd size={22} /> </IconButton>
            <TextButton style={{ display: open ? "block" : "none" }}> Clientes </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Products">
            <IconButton> <IoCartOutline size={25} /> </IconButton>
            <TextButton style={{ display: open ? "block" : "none" }}> Produtos </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Sales">
            <IconButton> <IoStorefrontOutline size={25} /> </IconButton>
            <TextButton style={{ display: open ? "block" : "none" }}> Vendas </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/NoteFiscale">
            <IconButton> <IoReaderOutline size={25} /> </IconButton>
            <TextButton style={{ display: open ? "block" : "none" }}> Nota fiscal </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Financial">
            <IconButton> <IoCashOutline size={25} /> </IconButton>
            <TextButton style={{ display: open ? "block" : "none" }}> Financeiro </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Grafics">
            <IconButton> <IoStatsChartSharp size={25} /> </IconButton>
            <TextButton style={{ display: open ? "block" : "none" }}> Gráficos </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Carrying">
            <IconButton> <TbTruck size={25} /> </IconButton>
            <TextButton style={{ display: open ? "block" : "none" }}> Transportadora </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Reports">
            <IconButton> <IoDocumentTextOutline size={25} /> </IconButton>
            <TextButton style={{ display: open ? "block" : "none" }}> Relátorios </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Configs">
            <IconButton> <IoSettingsOutline size={25} /> </IconButton>
            <TextButton style={{ display: open ? "block" : "none" }}> Configurações </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Clients">
            <IconButton> <IoHeadset size={25} /> </IconButton>
            <TextButton style={{ display: open ? "block" : "none" }}> Suporte </TextButton>
          </ButtonStyle>

          <ButtonStyle as={Link} to="/Clients">
            <IconButton> <IoLogOutOutline size={25} /> </IconButton>
            {colapse ? (
              <TextButton style={{ display: open ? "block" : "none" }}> Sair </TextButton>
            ) : <></>
            }
          </ButtonStyle>

        </Content>
      </Container>
    </div>
  )
}