import myPhoto from '../../../assets/images/myPhoto.webp'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
import { Button } from './button/Button'

export function Main() {
   return (
      <StyledMain>
         <Container>
            <FlexWrapper jc={'space-between'} ai={'center'}>
               <MainInfo>
                  <MainGreeting>Welcome</MainGreeting>
                  <MainName>I am Nikita Akmaykin</MainName>
                  <MainTitle>A Frontend Developer</MainTitle>
                  <Button text='Download CV'/>
               </MainInfo>
               <MainPhoto src={myPhoto} alt="Photo" />
            </FlexWrapper>
         </Container>
      </StyledMain>

   )
}

const StyledMain = styled.section`
min-height: 100vh;
display: flex;
background-color: ${theme.colors.primaryBg};

`
const MainInfo = styled.div`

`

const MainGreeting = styled.span`
display: inline-block;
margin-bottom: 20px;
font-size: 22px;
font-weight: 300;
letter-spacing: 5px;
`

const MainName = styled.h2`
color: #FFF;
font-family: 'Josefin Sans', 'sans-serif';
font-size: 50px;
margin-bottom: 15px;
font-weight: 600;
`

const MainTitle = styled.h1`
font-size: 27px;
font-weight: 400;
margin-bottom: 25px;
`

const MainPhoto = styled.img`
   max-width: 566px;
   max-height: 600px;
   object-fit: cover;
`