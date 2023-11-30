import { Logo } from '../../components/logo/Logo'
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { MobileMenu } from './headerMenu/mobileMenu/MobileMenu';
import React, { useEffect, useState } from 'react';
import { S } from './Header_Styles';
import { DesktopMenu } from './headerMenu/desktopMenu/DesktopMenu';

const menuItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export const Header: React.FC = () => {
   const [width, setWidth] = useState(window.innerWidth);
   const breakpoint = 768;

   useEffect(() => {
      const handleInnerWidth = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleInnerWidth);
      return () => window.removeEventListener('resize', handleInnerWidth);
   }, []);

   return (
      <S.Header>
         <Container>
            <FlexWrapper jc='space-between' ai='center'>
               <Logo />
               {width <= breakpoint ? <MobileMenu items={menuItems} />
                                    : <DesktopMenu items={menuItems} />}
            </FlexWrapper>
         </Container>
      </S.Header>
   )
}