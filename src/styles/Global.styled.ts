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

*{
  scrollbar-width: thin;
  scrollbar-color: ${theme.colors.scrollBar.default} ${theme.colors.scrollBar.track};
}

*::-webkit-scrollbar{
  width: 15px;
}

*::-webkit-scrollbar-thumb{
  background-color: ${theme.colors.scrollBar.default};
  border-radius: 25px;
  &:hover{
    background-color: ${theme.colors.scrollBar.hover};
  }
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
  font-weight: 400;
  min-width: 360px;
  font-size: 14px;
}

nav, footer, header, aside {
  display: block;
}

html, body {
  height: 100%;
  width: 100%;
  font-style: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

button {
  cursor: pointer;
  background-color: unset;
  border: none;
  color:${theme.colors.font};
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a {
  text-decoration: none;
  color: ${theme.colors.font};
  cursor: pointer;
}

a:hover, a:visited {
  text-decoration: none;
}

ul li {
  list-style-type: none;
}

section{
  padding: 60px 0px;
  
  &:nth-child(odd){
    background-color: ${theme.colors.secondaryBg};
  }
  &:nth-child(even){
    background-color: ${theme.colors.primaryBg};
  }

  @media ${theme.media.mobile}{
    padding: 50px 0;
  }
}
`