import myPhoto from '../../../assets/images/myPhoto.webp'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { Button } from './button/Button'
import { font } from '../../../styles/Common'

export function Main() {
   return (
      <StyledMain>
         <Container>
            <FlexWrapper jc={'space-between'} ai={'center'} wrap='wrap-reverse'>
               <MainInfo>
                  <MainGreeting>Welcome</MainGreeting>
                  <MainName>I am Nikita Akmaykin</MainName>
                  <MainTitle>A Frontend Developer</MainTitle>
                  <Button text='Download CV' />
               </MainInfo>
               <MainPhoto src={myPhoto} alt="Frontend developer photo" />
            </FlexWrapper>
         </Container>
      </StyledMain>

   )
}

const StyledMain = styled.section`
min-height: 100vh;
display: flex;

@media screen and (max-width: 992px){
   ${FlexWrapper}{
      justify-content: space-around;
      align-items: stretch;
   }
   text-align: center;
}
`
const MainInfo = styled.div`
margin-right: 26px;
@media ${theme.media.tablet}{ 
      margin: 0;
    } 
`

const MainGreeting = styled.span`
display: inline-block;
margin-top: 1em;
${font({ Fmax: 22, Fmin: 17, fw: 300, ls: 5 })};
`

const MainName = styled.h2`
margin: 20px 0px 15px;
${font({ ff: "'Josefin Sans', sans-serif", Fmax: 50, Fmin: 30, fw: 600 })};
filter: drop-shadow(0 20px 50px ${theme.colors.shadow.primary});
`

const MainTitle = styled.h1`
${font({ Fmax: 27, Fmin: 20 })}
margin-bottom: 25px;
`

const MainPhoto = styled.img`
   width: 502px;
   object-fit: cover;
   aspect-ratio: 1/1.2;

    @media ${theme.media.tablet}{ 
       width: 400px; 
    } 
    @media ${theme.media.mobile}{ 
       width: 320px; 
    }
`