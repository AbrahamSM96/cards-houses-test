import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  body {
    background-image: url('https://media4.giphy.com/media/U3qYN8S0j3bpK/giphy.gif?cid=ecf05e47bnuiivqg0ospj7263clm9iqqkoj51t78u1jze1ln&rid=giphy.gif');
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    background-position: center;
background-size: cover;
    /* con margin: 0 auto se centra la aplicacion */
    margin: 0 auto;
    /* evita que haga rebotes el scroll */
    overscroll-behavior: none;
    width: 100%; 
    ::-webkit-scrollbar {
    display: none;
}
  }
`;
