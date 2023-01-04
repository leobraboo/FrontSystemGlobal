import styled from "styled-components";
import fundo from '../../assets/fundo.jpg'

export const LoginGeneral = styled.div`
align-content: center;
display: flex;
position: absolute;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-image: url(${fundo});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
`

export const LoginImg = styled.div`
align-content: center;
align-items: center;
display: flex;
justify-content: center;
width: 68%;
height: 100vh;

@media screen and (min-width: 320px) and (max-width: 790px){
  width: 0%;
}
`
export const LoginCard = styled.div`
align-content: center;
align-items: center;
display: flex;
justify-content: center;
width: 30%;
height: 60vh;


@media screen and (min-width: 320px) and (max-width: 790px){
width: 80%;
display: flex;
align-content: center;
align-items: center;
justify-content: center;
}
`
