import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'
import myPhoto from '../../../assets/images/myPhoto.webp'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { font } from '../../../styles/Common'

export function About() {
   return (
      <StyledAbout>
         <Container>
            <FlexWrapper jc='space-around' ai={'center'} gap='25px'>
               <AboutPhoto src={myPhoto} alt='Frontend developer photo' />
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
@media screen and (max-width: 992px){
   ${FlexWrapper}{
      flex-wrap: wrap;
      justify-content: space-around;
   }
   text-align: center;
}
`

const AboutPhoto = styled.img`
width: 470px;
aspect-ratio: 1/1.1;
object-fit: cover;

@media ${theme.media.tablet}{ 
       width: 400px; 
    } 

@media ${theme.media.mobile}{ 
       width: 320px; 
}
`

const AboutInfo = styled.div`
max-width: 521px;
@media ${theme.media.tablet}{ 
      margin: 0;
    } 
`

const AboutTitle = styled.h2`
${font({ Fmax: 80, Fmin: 40, fw: 600, ls: 4 })};
margin-bottom: 20px;
@media screen and (max-width: 992px){
  margin-bottom: 5px;
}
`

const AboutDescription = styled.p`
${font({ Fmax: 16, Fmin: 14, ls: 2, lh: 28 })};
`

const Accent = styled.span`
color: ${theme.colors.accentPrimary};
font-weight: 600;
`