import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  a {
      color: inherit;
      text-decoration: none;
  }

  * {
    font-family: 'Open Sans', sans-serif; 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`