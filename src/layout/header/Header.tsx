import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { theme } from '../../styles/Theme';
import { MobileMenu } from './mobileMenu/MobileMenu';

const menuItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export function Header() {
   return (
      <StyledHeader>
         <Container>
            <FlexWrapper jc='space-between' ai='center'>
               <Logo />
               <Menu items={menuItems} />
               <MobileMenu items={menuItems}/>
            </FlexWrapper>
         </Container>
      </StyledHeader>
   )
}

const StyledHeader = styled.header`
   background-color: ${theme.colors.primaryBg};
   padding: 25px 0px;
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   z-index: 999;
`