import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
body, html {
  height: 100vh;
  width: 100vw;
  background-color: #D3D3D3;
  padding: 0;
  margin: 0;
}

* {
    outline: 0;
    box-sizing: border-box
  }
`