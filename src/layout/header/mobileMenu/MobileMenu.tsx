import styled, { css } from 'styled-components'
import { theme } from '../../../styles/Theme'
import { useState } from 'react'


export function MobileMenu(props: { items: Array<string> }) {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <StyledMobileMenu>
         <BurgerButton onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen}>
            <span></span>
         </BurgerButton>
         <MobileMenuPopup isOpen={isOpen}>
            <ul>
               {props.items.map((item) =>
                  <MenuItem key={item}>
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
width: 36px;
height: 36px;
right: 0;
bottom: -10px;
z-index: 99999;


   span{
      display: block;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.accentPrimary};
      position: absolute;
      top: 25px;
      left: 0;
      transition: all .25s;


      ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
      `}

      &::before{
         content: '';
         width: 100%;
         position: absolute;
         transform: translateY(-10px);
         left: 0;
         height: 2px;
         background-color: ${theme.colors.accentPrimary};
         transition: transform .25s;

         ${props => props.isOpen && css<{ isOpen: boolean }>`
         transform: rotate(-45deg) translateY(0px) ;
      `}
      }

      &::after{
         content: '';
         width: 100%;
         position: absolute;
         transform: translateY(10px);
         height: 2px;
         left: 0;
         background-color: ${theme.colors.accentPrimary};
         transition: transform .25s;

         ${props => props.isOpen && css<{ isOpen: boolean }>`
         transform: rotate(45deg) translateY(0px) ;
      `}
      }
   }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
position: fixed;
background-color: rgba(54, 54, 55, 0.9);
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 999;
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
gap: 25px;
}
`


const MenuItem = styled.li`

`
const MenuLink = styled.a`
font-size: 20px;
transition: color .4s;

&:hover{
   color: ${theme.colors.accentPrimary};
}
`