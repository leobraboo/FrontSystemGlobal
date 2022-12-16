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
  ButtonStyle, TextButton, UserContainer} from "./styles";


interface NavHomeProps {
  colapse: boolean;
}

export function NavHome({ colapse }: NavHomeProps) {
  const [open, setOpen] = useState(false);
  return (
<div  >
    <Container style={{width: open ? "200px" : "50px"}} onClick={() => setOpen(!open)}>
      <UserContainer>
        <IconButton >
          <IoPersonCircleOutline size={70} /> BMS OPTICA
        </IconButton>
      </UserContainer>
      <Content>
        <ButtonStyle style={{width: open ? "180px" : "10px"}} as={Link} to="/Clients" >
          <IconButton> <IoPersonAdd size={25} /> </IconButton>
          {colapse ? (
            <TextButton> Clientes </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle as={Link} to="/Products">
          <IconButton> <IoCartOutline size={25} /> </IconButton>
          {colapse ? (
            <TextButton> Produtos </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle as={Link} to="/Sales">
          <IconButton> <IoStorefrontOutline size={25} /> </IconButton>
          {colapse ? (
            <TextButton> Vendas </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle as={Link} to="/NoteFiscale">
          <IconButton> <IoReaderOutline size={25} /> </IconButton>
          {colapse ? (
            <TextButton> Nota fiscal </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle as={Link} to="/Financial">
          <IconButton> <IoCashOutline size={25} /> </IconButton>
          {colapse ? (
            <TextButton> Financeiro </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle as={Link} to="/Grafics">
          <IconButton> <IoStatsChartSharp size={25} /> </IconButton>
          {colapse ? (
            <TextButton> Gráficos </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle as={Link} to="/Carrying">
          <IconButton> <TbTruck size={25} /> </IconButton>
          {colapse ? (
            <TextButton> Transportadora </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle as={Link} to="/Reports">
          <IconButton> <IoDocumentTextOutline size={25} /> </IconButton>
          {colapse ? (
            <TextButton> Relátorios </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle as={Link} to="/Configs">
          <IconButton> <IoSettingsOutline size={25} /> </IconButton>
          {colapse ? (
            <TextButton> Configurações </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle as={Link} to="/Clients">
          <IconButton> <IoHeadset size={25} /> </IconButton>
          {colapse ? (
            <TextButton> Suporte </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle as={Link} to="/Clients">
          <IconButton> <IoLogOutOutline size={25} /> </IconButton>
          {colapse ? (
            <TextButton> sair </TextButton>
          ) : <></>
          }
        </ButtonStyle>

      </Content>
    </Container>
    </div>
  )
}