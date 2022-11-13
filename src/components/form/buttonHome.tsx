import { ButtonStyle, TextButton } from "./styles";

interface ButtonHomeProps {
    children ?: JSX.Element;
    Text?: JSX.Element;
    colapse: boolean
  
}

export function ButtonHome({children, colapse, Text}:ButtonHomeProps) {
  return (
    <div>
    <ButtonStyle>
        <div></div>   
        {
          colapse ? (
            <TextButton>aaaaaa</TextButton>
          ): <></>
        }
    </ButtonStyle>

</div>
  )
}