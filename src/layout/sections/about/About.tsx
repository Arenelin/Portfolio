import myPhotoWebpLittle from '../../../assets/images/myPhoto.webp'
import myPhotoWebpMiddle from '../../../assets/images/myPhoto@1.5x.webp'
import myPhotoWebpLarge from '../../../assets/images/myPhoto@2x.webp'
import myPhotoJpgLittle from '../../../assets/images/myPhoto.jpg'
import myPhotoJpgMiddle from '../../../assets/images/myPhoto@1.5x.jpg'
import myPhotoJpgLarge from '../../../assets/images/myPhoto@2x.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'
import { changeSize, font } from '../../../styles/Common'

export function About() {
   return (
      <StyledAbout>
         <Container>
            <FlexWrapper jc='space-around' ai={'center'} gap='25px'>
               <Picture>
                  <source srcSet={`${myPhotoWebpLarge} 2x, ${myPhotoWebpMiddle} 1.5x, ${myPhotoWebpLittle} 1x`} type='image/webp' />
                  <source srcSet={`${myPhotoJpgLarge} 2x, ${myPhotoJpgMiddle} 1.5x, ${myPhotoJpgLittle} 1x`} type='image/jpeg' />
                  <img src={myPhotoJpgLittle} alt="Frontend Developer" />
               </Picture>
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
margin-bottom: ${changeSize({ PxMax: 20, PxMin: 5})};
`

const AboutDescription = styled.p`
${font({ PxMax: 16, PxMin: 14, ls: 2, lh: 28 })};
`

const Accent = styled.span`
color: ${theme.colors.accentPrimary};
font-weight: 600;
`