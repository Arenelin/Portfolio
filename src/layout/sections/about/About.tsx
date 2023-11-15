import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'
import myPhoto from '../../../assets/images/myPhoto.webp'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

export function About() {
   return (
      <StyledAbout>
         <Container>
            <FlexWrapper jc={'space-around'} ai={'center'}>
               <AboutPhoto src={myPhoto} alt='Photo' />
               <AboutInfo>
                  <AboutTitle>About me</AboutTitle>
                  <AboutDescription>Hello, I'm a front-end developer who combines a creative approach to solving non-standard problems <Accent>in team work</Accent>, deep technical knowledge and <Accent>a passion for front-end development.</Accent> My goal is to join a team where we can combine our efforts, experience and thinking to <Accent>turn any concept into a superior user experience.</Accent> 
                  </AboutDescription>
               </AboutInfo>
            </FlexWrapper>
         </Container>
      </StyledAbout>
   )
}

const StyledAbout = styled.section`
   background-color: #2B2A2A;
   padding: 66px 0px 60px;
`

const AboutPhoto = styled.img`
   max-width: 470px;
   max-height: 518px;
   object-fit: cover;
`

const AboutInfo = styled.div`
   max-width: 521px;
`

const AboutTitle = styled.h2`
font-size: 80px;
font-weight: 600;
letter-spacing: 4px;
margin-bottom: 20px;
`

const AboutDescription = styled.p`
font-weight: 400;
letter-spacing: 2px;
font-size: 16px;
line-height: 28px;
`

const Accent = styled.span`
color: ${theme.colors.accentPrimary};
font-weight: 600;
`
