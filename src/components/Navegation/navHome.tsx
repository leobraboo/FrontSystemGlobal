import {
  IoPersonCircleOutline, IoPersonAdd,
  IoBriefcaseOutline, IoStorefrontOutline,
  IoReaderOutline, IoStatsChartSharp,
  IoSettingsOutline, IoPricetagsOutline
} from "react-icons/io5";
import { TbTruck } from "react-icons/tb";
import { useState } from "react";
import { Container, Content, IconButton, ButtonStyle, TextButton, UserContainer } from "./styles";


interface NavHomeProps {
  colapse: boolean;
}

export function NavHome({ colapse }: NavHomeProps) {
  const [open, setOpen] = useState(true);

  return (

    <Container onClick={() => setOpen((state) => !state)}>
      <UserContainer >
        <IconButton>
          <IoPersonCircleOutline size={70} /> ROOTS
        </IconButton>
      </UserContainer>
      <Content>
        <ButtonStyle>
          <IconButton> <IoPersonAdd size={30} /> </IconButton>
          {colapse ? (
            <TextButton> Clientes </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle>
          <IconButton> <IoBriefcaseOutline size={30} /> </IconButton>
          {colapse ? (
            <TextButton> Produtos </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle>
          <IconButton> <IoStorefrontOutline size={30} /> </IconButton>
          {colapse ? (
            <TextButton> Vendas </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle>
          <IconButton> <IoReaderOutline size={30} /> </IconButton>
          {colapse ? (
            <TextButton> Nota fiscal </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle>
          <IconButton> <IoStatsChartSharp size={30} /> </IconButton>
          {colapse ? (
            <TextButton> Gráficos </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle>
          <IconButton> <TbTruck size={30} /> </IconButton>
          {colapse ? (
            <TextButton> Transportadora </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle>
          <IconButton> <IoPricetagsOutline size={30} /> </IconButton>
          {colapse ? (
            <TextButton> Relátorios </TextButton>
          ) : <></>
          }
        </ButtonStyle>

        <ButtonStyle>
          <IconButton> <IoSettingsOutline size={30} /> </IconButton>
          {colapse ? (
            <TextButton> Configurações </TextButton>
          ) : <></>
          }
        </ButtonStyle>


      </Content>
    </Container>
  )
}