import myPhotoWebpLittle from '../../../assets/images/myPhoto.webp'
import myPhotoWebpMiddle from '../../../assets/images/myPhoto@1.5x.webp'
import myPhotoWebpLarge from '../../../assets/images/myPhoto@2x.webp'
import myPhotoJpgLittle from '../../../assets/images/myPhoto.jpg'
import myPhotoJpgMiddle from '../../../assets/images/myPhoto@1.5x.jpg'
import myPhotoJpgLarge from '../../../assets/images/myPhoto@2x.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Container } from '../../../components/Container'
import { S } from './About_Styles'
import React from 'react'

export const About: React.FC = () => {
   return (
      <S.About>
         <Container>
            <FlexWrapper jc='space-around' ai={'center'} gap='25px'>
               <S.Picture>
                  <source srcSet={`${myPhotoWebpLarge} 2x, ${myPhotoWebpMiddle} 1.5x, ${myPhotoWebpLittle} 1x`} type='image/webp' />
                  <source srcSet={`${myPhotoJpgLarge} 2x, ${myPhotoJpgMiddle} 1.5x, ${myPhotoJpgLittle} 1x`} type='image/jpeg' />
                  <img src={myPhotoJpgLittle} alt="Frontend Developer" loading="lazy" />
               </S.Picture>
               <S.AboutInfo>
                  <S.AboutTitle>About me</S.AboutTitle>
                  <S.AboutDescription>Hello, I'm a front-end developer who combines a creative approach to solving non-standard problems <S.Accent>in team work</S.Accent>, deep technical knowledge and <S.Accent>a passion for front-end development.</S.Accent> My goal is to join a team where we can combine our efforts, experience and thinking to <S.Accent>turn any concept into a superior user experience.</S.Accent>
                  </S.AboutDescription>
               </S.AboutInfo>
            </FlexWrapper>
         </Container>
      </S.About>
   )
}