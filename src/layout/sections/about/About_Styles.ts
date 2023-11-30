import styled from "styled-components"
import { changeSize, font } from "../../../styles/Common"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { theme } from "../../../styles/Theme"

const About = styled.section`

@media ${theme.media.laptop}{
   ${FlexWrapper}{
      flex-wrap: wrap;
   }
   text-align: center;
}
`

const Picture = styled.picture`
   img{
      width: 470px;
aspect-ratio: 1/1.1;
object-fit: cover;

@media ${theme.media.tablet}{ 
       width: 400px; 
    } 

@media ${theme.media.mobile}{ 
       width: 320px; 
}
   }
`

const AboutInfo = styled.div`
max-width: 521px;
`

const AboutTitle = styled.h2`
${font({ PxMax: 80, PxMin: 40, fw: 600, ls: 4 })};
margin-bottom: ${changeSize({ PxMax: 20, PxMin: 5 })};
`

const AboutDescription = styled.p`
${font({ PxMax: 16, PxMin: 14, ls: 2, lh: 28 })};
`

const Accent = styled.span`
color: ${theme.colors.accentColors.primary};
font-weight: 600;
`

export const S = {
   About,
   Picture,
   AboutInfo,
   AboutTitle,
   AboutDescription,
   Accent
}