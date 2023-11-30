import React, { useEffect, useState } from 'react'
import { Menu } from '../menu/Menu';
import { S } from '../HeaderMenu_Styles';

export const MobileMenu: React.FC<{ items: Array<string> }> = (props: { items: Array<string> }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [isInitialized, setIsInitialized] = useState(false);

   useEffect(() => {
      if (isOpen && !isInitialized) {
         setIsInitialized(true)
      }
    }
   , [isOpen])

   return (
      <S.MobileMenu>
         <S.BurgerButton onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen} isInitialized={isInitialized}  aria-label='Close button'>
            <span></span>
         </S.BurgerButton>
         <S.ArrowButton onClick={() => setIsOpen((prev) => !prev)} isOpen={isOpen} isInitialized={isInitialized} aria-label='Close button'>
            <span></span>
         </S.ArrowButton>
         <S.MobileMenuPopup isOpen={isOpen}>
            <Menu items={props.items} />
         </S.MobileMenuPopup>
      </S.MobileMenu>
   )
}