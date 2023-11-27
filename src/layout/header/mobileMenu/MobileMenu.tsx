import styled, { css } from 'styled-components'
import { theme } from '../../../styles/Theme'
import { useState } from 'react'

export function MobileMenu(props: { items: Array<string> }) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <StyledMobileMenu>
         <BurgerButton onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen} aria-label='Close button'>
            <span></span>
         </BurgerButton>
         <MobileMenuPopup isOpen={isOpen}>
            <ul role='menu'>
               {props.items.map((item) =>
                  <MenuItem key={item} role='menuitem'>
                     <MenuLink href='#'>{item}</MenuLink>
                  </MenuItem>
               )}
            </ul>
         </MobileMenuPopup>
      </StyledMobileMenu>
   )
}

const StyledMobileMenu = styled.nav`
display: none;
position: relative;

@media ${theme.media.tablet}{
   display: block;
}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
position: absolute;
width: 40px;
height: 40px;
right: 0;
bottom: -12px;
z-index: 99999;
transition: all .25s;

   span{
      display: block;
      width: 100%;
      height: 5px;
      background-color: ${theme.colors.accentColors.primary};
      position: absolute;
      top: 25px;
      left: 0;
      transition: transform .5s;

      &::before{
         content: '';
         width: 100%;
         position: absolute;
         top: -14px;
         left: 0;
         height: 5px;
         background-color: ${theme.colors.accentColors.primary};
         transition: transform .5s;

         ${props => props.isOpen && css<{ isOpen: boolean }>`
         transform: rotateZ(45deg) scaleX(0.75) translate(18px, -6px);
      `}
      }

      &::after{
         content: '';
         width: 100%;
         position: absolute;
         top: 14px;
         height: 5px;
         left: 0;
         background-color: ${theme.colors.accentColors.primary};
         transition: transform .5s;

         ${props => props.isOpen && css<{ isOpen: boolean }>`
         transform: rotateZ(-45deg) scaleX(0.75) translate(18px, 6px);
      `}
      }
   }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
position: fixed;
background-color: ${theme.colors.sectionBackgrounds.secondary};
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 99;
display: none;

${props => props.isOpen && css<{ isOpen: boolean }>`
   display: flex;
   align-items: center;
   justify-content: center;
`}

ul{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
}
`

const MenuItem = styled.li`

`

const MenuLink = styled.a`
font-size: 25px;
`