import styled from "styled-components"
import { theme } from "../../styles/Theme"

const Link = styled.a`
transition: all .5s;
position: relative;
z-index: 100;
&:hover{
   transform: scale(1.1);
}
`

const LogoName = styled.span`
color: ${theme.colors.accentColors.primary};
font-family: 'Alex Brush', sans-serif;
font-size: 32px;
filter: drop-shadow(3px 6px 10px ${theme.colors.shadow.accent});
`

export const S = {
   Link,
   LogoName
}