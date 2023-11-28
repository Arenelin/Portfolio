import React, { useState } from 'react'
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

export const MobileMenu: React.FC<{ items: Array<string> }> = (props: { items: Array<string> }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <S.MobileMenu>
         <S.BurgerButton onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen} aria-label='Close button'>
            <span></span>
         </S.BurgerButton>
         <S.MobileMenuPopup isOpen={isOpen}>
            <Menu items={props.items} />
         </S.MobileMenuPopup>
      </S.MobileMenu>
   )
}