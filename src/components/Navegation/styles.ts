import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; 
  background: #1C1C1C; 
  align-items: center;
  padding: 10px;
  position: fixed;
  gap: 60px;
  border-right: 5px solid #00CED1;
  `
  export const Containeractive = styled.div`
  height: 100vh; 
  background: red;
  align-items: center;
  padding: 10px;
  position: fixed;
  gap: 60px;
  border-right: 5px solid red;
  z-index: 1000;

  `

  export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 10vh;
  background: #1C1C1C; 
  align-items: center;
  padding: 10px;
  gap: 40px;
  color: white;

  `



  export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background: #1C1C1C; 
  align-items: center;
  gap: 5px;

  `

  export const IconButton = styled.div`
  display: flex;
  color: white; 
  flex-direction: column;
  align-items: center;

  :hover{
    color: #00CED1;
  `
export const ButtonStyle = styled.button`
  display: flex;
  flex-direction: row;
  width: 280px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background: #1C1C1C	; 
  align-items: center;
  gap: 30px;

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

