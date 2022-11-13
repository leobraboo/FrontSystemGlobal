import { UserCircle, UserList, Truck, Trash, TrendUp, Tote, Tag, Storefront, ShoppingCart, Package, Gear } from "phosphor-react";
import { useState } from "react";
import { ButtonHome } from "./form/buttonHome";
import { Container, Content } from "./styles";


interface NavHomeProps {
  colapse: boolean;
}

export function NavHome({ colapse }: NavHomeProps) {
  const [open, setOpen] = useState(true);

  return (

      <Container onClick={() => setOpen((state) => !state)}  >
        <div>
          <UserCircle weight="light" />
          ROOTS
        </div>
        <Content>
          <ButtonHome colapse/>
          <ButtonHome colapse/>
          <ButtonHome colapse/>
          <ButtonHome colapse/>
          <ButtonHome colapse/>
          <ButtonHome colapse/>
          <ButtonHome colapse/>
          <ButtonHome colapse/>
        </Content>
      </Container>
  )
}