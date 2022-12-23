import { Stack , Form } from "react-bootstrap";
import styled from "styled-components";
import fundobar from '../../../public/assets/laele.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(${fundobar}) ;
  background-size: cover;
  align-items: center;
  padding: 10px;
  position: fixed;
  border-right: 2px solid #00CED1;

  :focus{
    background: red;
  }
`

export const UserContainer = styled.div`
  display: flex;
  height: 10vh;
  flex-direction: row;
  justify-content: flex-end;
  // background: #1C1C1C;
  width: 100%;
  `

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  // background: #1C1C1C; 
  `

export const IconButton = styled.div`
  display: flex;
  margin-left: 5px;
  flex-direction: column;
  align-items: flex-end;
  text-decoration: none;
  color: #00FFFF;

  :hover{
    color: white;
  `
export const ButtonStyle = styled.button`
  display: flex;
  height: 45px;
  border-radius: 10px;
  // background: #1C1C1C;
  align-items:center;
  flex-direction: row;
  text-decoration: none;
  gap: 10px;

  :hover{
    background: #363636	;
  }
`
export const FormStyle = styled.button`
  display: flex;
  height: 45px;
  margin-left: 5px;
  border-radius: 10px;
  border: none;
  color: #00FFFF;
  background: #1C1C1C;
  align-items:center;
  flex-direction: row;
  text-decoration: none;
  gap: 10px;

  a:hover{
    background: #363636	;
  }
`

export const TextButton = styled.text`
font-size: 1rem;
align-items: center;
color: #F0F8FF;

:hover{
  color: #00FFFF;
}
`
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 60px;
  background: #1C1C1C; 
  align-items: center;
  padding: 10px;
  position: fixed;
  gap: 40px;
  justify-content: flex-end;
  border-bottom: 2px solid #00CED1;

  :focus{
    background: red;
  }
`

export const CSearch = styled(Stack)`
display: flex;
flex-direction: row;
flew-wrap: wrap;
align-items: center;
:hover{
  color: #00FFFF;
}
`

