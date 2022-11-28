import { CardGeneral } from "./components/LoginCard";
import { LoginCard, LoginGeneral, LoginImg } from "./styles";


export function Login(){
  return(
    <LoginGeneral >
      {/* <LoginImg>
      <LoginCarrousel/> 
      </LoginImg> */}
      <LoginCard>
        <CardGeneral/>
      </LoginCard>
    </LoginGeneral>
  )
}