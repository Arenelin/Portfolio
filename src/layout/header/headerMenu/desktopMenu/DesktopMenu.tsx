import { Menu } from '../menu/Menu'
import { S } from '../HeaderMenu_Styles'

export const DesktopMenu: React.FC<{ items: Array<string> }> = (props: { items: Array<string> }) => {
   return (
      <S.DesktopMenu>
         <Menu items={props.items} />
      </S.DesktopMenu>
   )
}