import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common"
import { FlexWrapper } from "../../../components/FlexWrapper"

const Main = styled.section`
min-height: 100vh;
display: flex;

@media ${theme.media.laptop}{
   ${FlexWrapper}{
      justify-content: space-around;
      align-items: stretch;
   }
   text-align: center;
}

a{
   display: inline-block;
}
`
const MainInfo = styled.div`

`

const MainGreeting = styled.span`
display: inline-block;
${font({ PxMax: 22, PxMin: 17, fw: 300, ls: 5 })}
`

const MainName = styled.h2`
margin: 20px 0px 15px;
${font({ PxMax: 50, PxMin: 30, ff: "'Josefin Sans', sans-serif", fw: 600 })}
filter: drop-shadow(0 20px 50px ${theme.colors.shadow.primary});
`

const MainTitle = styled.h1`
${font({ PxMax: 27, PxMin: 20 })}
margin-bottom: 25px;
`

const Picture = styled.picture`

img{
  width: 516px;
   object-fit: cover;
   aspect-ratio: 1/1.2;

    @media ${theme.media.tablet}{ 
       width: 400px; 
    } 
    @media ${theme.media.mobile}{ 
       width: 320px; 
    }   
}
`

export const S = {
   Main,
   MainInfo,
   MainGreeting,
   MainName,
   MainTitle,
   Picture,
}