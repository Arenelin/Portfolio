import React from 'react'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'

export function Header() {
   return (
      <StyledHeader>
         <Logo />
         <Menu/>
      </StyledHeader>
   )
}

const StyledHeader = styled.header`
   background-color: #1F1F1F;
   display: flex; 
   justify-content: space-between;
   align-items: center;
`