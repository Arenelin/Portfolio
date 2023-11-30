import styled from "styled-components"
import { theme } from "../../styles/Theme"

//Footer
const Footer = styled.footer`
background-color: ${theme.colors.sectionBackgrounds.primary};
text-align: center;
padding: 40px 0;
`

const Name = styled.span`
font-family: 'Josefin Sans', sans-serif;
font-size: 22px;
font-weight: 700;
letter-spacing: 3px;
`
const Copyright = styled.small`
opacity: 0.5;
font-size: 12px;
`

//Social list
const SocialList = styled.ul`
display: flex;
gap: 20px;
justify-content: center;
margin: 30px 0px;
`

//Social item
const SocialItem = styled.li`

`

const SocialLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
width: 45px;
height: 45px;
border-radius: 50%;
background-color: ${theme.colors.socialLink.bgc};
color: ${theme.colors.socialLink.font};
transition: all .4s;
animation: animate 3s linear infinite;
text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
    0 0 200px #0072ff;
    
@keyframes animate {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}

&:hover{
   transform: translateY(-4px) scale(1.4);
   background-color: ${theme.colors.socialLink.hover.bgc};
   color: ${theme.colors.socialLink.hover.font};
}
`

export const S = {
   Footer,
   Name,
   Copyright,
   SocialList,
   SocialItem,
   SocialLink
}