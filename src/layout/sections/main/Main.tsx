import myPhotoWebpLittle from '../../../assets/images/myPhoto.webp'
import myPhotoWebpMiddle from '../../../assets/images/myPhoto@1.5x.webp'
import myPhotoWebpLarge from '../../../assets/images/myPhoto@2x.webp'
import myPhotoJpgLittle from '../../../assets/images/myPhoto.jpg'
import myPhotoJpgMiddle from '../../../assets/images/myPhoto@1.5x.jpg'
import myPhotoJpgLarge from '../../../assets/images/myPhoto@2x.jpg'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import React from 'react'
import { S } from './Main_Styles'
import { AccentButton } from '../../../components/AccentButton'

export const Main: React.FC = () => {
   return (
      <S.Main>
         <Container>
            <FlexWrapper jc={'space-between'} ai={'center'} wrap='wrap-reverse' gap='26px'>
               <S.MainInfo>
                  <S.MainGreeting>Welcome</S.MainGreeting>
                  <S.MainName>I am Nikita Akmaykin</S.MainName>
                  <S.MainTitle>A Frontend Developer</S.MainTitle>
                  <AccentButton href='https://github.com/zillomoons/my_portfolio/raw/master/dolzhit_ts_resume.pdf' as={'a'} target='_blank' rel='noreferrer' download>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     Download CV
                  </AccentButton>
               </S.MainInfo>
               <S.Picture>
                  <source srcSet={`${myPhotoWebpLarge} 2x, ${myPhotoWebpMiddle} 1.5x, ${myPhotoWebpLittle} 1x`} type='image/webp' />
                  <source srcSet={`${myPhotoJpgLarge} 2x, ${myPhotoJpgMiddle} 1.5x, ${myPhotoJpgLittle} 1x`} type='image/jpeg' />
                  <img src={myPhotoJpgLittle} alt="Frontend Developer" loading='lazy' />
               </S.Picture>
            </FlexWrapper>
         </Container>
      </S.Main>
   )
}