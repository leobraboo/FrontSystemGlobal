import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #1C1C1C; 
  align-items: center;
  padding: 10px;
  position: fixed;
  gap: 40px;
  border-right: 5px solid #00CED1;

  :focus{
    background: red;
  }
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 10vh;
  background: #1C1C1C; 
  `

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #1C1C1C; 
  `

export const IconButton = styled.div`
  display: flex;
  margin-left:10px;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #00CED1;

  :hover{
    color: white;
  `
export const ButtonStyle = styled.button`
  display: flex;
  height: 45px;
  border-radius: 10px;
  background: #1C1C1C;
  align-items:center;
  flex-direction: row;
  text-decoration: none;
  gap: 10px;

  :hover{
    background: #363636	;
  }
`

export const TextButton = styled.text`
font-size: 1rem;
align-items: center;
color: #F0F8FF;

:hover{
  color: #00CED1;
}
`

