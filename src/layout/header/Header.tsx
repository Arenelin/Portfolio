import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'

const menuItems = ['Home', 'About', 'Tech Stack', 'Projects', 'Contact'];

export function Header() {
   return (
      <StyledHeader>
         <Logo />
         <Menu items={menuItems} />
      </StyledHeader>
   )
}

const StyledHeader = styled.header`
   background-color: #1F1F1F;
   display: flex; 
   justify-content: space-between;
   align-items: center;
`