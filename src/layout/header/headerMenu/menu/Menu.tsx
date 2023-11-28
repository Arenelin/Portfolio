import React from 'react'
import { S } from '../HeaderMenu_Styles'

export const Menu: React.FC<{ items: Array<string> }> = (props: { items: Array<string> }) => {
   return (
      <ul role='menu'>
         {props.items.map((item) =>
            <S.MenuItem key={item} role='menuitem'>
               <S.MenuLink href='#'>{item}</S.MenuLink>
            </S.MenuItem>
         )}
      </ul>
   )
}

