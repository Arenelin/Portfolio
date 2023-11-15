import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*, 
*:before, 
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: 0;
}

body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  line-height: 1.2;
}

nav, footer, header, aside {
  display: block;
}

html, body {
  height: 100%;
  width: 100%;
  font-style: 100%;
  line-height: 1;
  font-size: 14px;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

button {
  cursor: pointer;
  background-color: unset;
  border: none;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a, a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style-type: none;
}

section{
  padding: 60px 0px;
}
`