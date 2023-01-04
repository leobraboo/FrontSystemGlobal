import { CardGeneral } from "./components/LoginCard";
import { LoginCard, LoginGeneral, LoginImg } from "./styles";


export function Login(){
  return(
    <LoginGeneral >
      <LoginCard>
        <CardGeneral/>
      </LoginCard>
    </LoginGeneral>
  )
}