import myPhoto from '../../../assets/images/myPhoto.webp'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'
import { responsiveFont, theme } from '../../../styles/Theme'
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
               <MainPhoto src={myPhoto} alt="Frontend developer photo" />
            </FlexWrapper>
         </Container>
      </StyledMain>

   )
}

const StyledMain = styled.section`
min-height: 100vh;
display: flex;
`
const MainInfo = styled.div`

`

const MainGreeting = styled.span`
font-size: 22px;
font-weight: 300;
letter-spacing: 5px;
`

const MainName = styled.h2`
font-family: 'Josefin Sans', sans-serif;
${responsiveFont({fMax: 50, fMin: 16})};
margin: 20px 0px 15px;
font-weight: 600;
filter: drop-shadow(0 20px 50px ${theme.colors.shadow.primary});
`

const MainTitle = styled.h1`
font-size: 27px;
margin-bottom: 25px;
`

const MainPhoto = styled.img`
   max-width: 566px;
   width: 100%;
   height: 600px;
   object-fit: cover;
`