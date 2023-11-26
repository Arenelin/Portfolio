import myPhotoWebpLittle from '../../../assets/images/myPhoto.webp'
import myPhotoWebpMiddle from '../../../assets/images/myPhoto@1.5x.webp'
import myPhotoWebpLarge from '../../../assets/images/myPhoto@2x.webp'
import myPhotoJpgLittle from '../../../assets/images/myPhoto.jpg'
import myPhotoJpgMiddle from '../../../assets/images/myPhoto@1.5x.jpg'
import myPhotoJpgLarge from '../../../assets/images/myPhoto@2x.jpg'
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
            <FlexWrapper jc={'space-between'} ai={'center'} wrap='wrap-reverse' gap='25px'>
               <MainInfo>
                  <MainGreeting>Welcome</MainGreeting>
                  <MainName>I am Nikita Akmaykin</MainName>
                  <MainTitle>A Frontend Developer</MainTitle>
                  <Button text='Download CV' />
               </MainInfo>
               <Picture>
                  <source srcSet={`${myPhotoWebpLarge} 2x, ${myPhotoWebpMiddle} 1.5x, ${myPhotoWebpLittle} 1x`} type='image/webp'/>
                  <source srcSet={`${myPhotoJpgLarge} 2x, ${myPhotoJpgMiddle} 1.5x, ${myPhotoJpgLittle} 1x`} type='image/jpeg'/>
                  <img src={myPhotoJpgLittle} alt="Frontend Developer" />
               </Picture>
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
@media ${theme.media.tablet}{ 
      margin: 0;
    } 
`

const MainGreeting = styled.span`
display: inline-block;
${font({ Fmax: 22, Fmin: 17, fw: 300, ls: 5})}
`

const MainName = styled.h2`
margin: 20px 0px 15px;
${font({ Fmax: 50, Fmin: 30, ff: "'Josefin Sans', sans-serif", fw: 600})}
filter: drop-shadow(0 20px 50px ${theme.colors.shadow.primary});
`

const MainTitle = styled.h1`
${font({ Fmax: 27, Fmin: 20 })}
font-size: clamp(1.25rem, 1.104rem + 0.65vw, 1.688rem);
margin-bottom: 25px;
`

const Picture = styled.picture`
img{
  width: 502px;
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