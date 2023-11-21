import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export function Menu(props: { items: Array<string> }) {
   return (
      <StyledMenu>
         <MenuList>
            {props.items.map((item) =>
               <MenuItem key={item}>
                  <MenuLink href='#'>{item}</MenuLink>
               </MenuItem>
            )}
         </MenuList>
      </StyledMenu>
   )
}

const StyledMenu = styled.nav`

`

const MenuList = styled.ul`
display: flex;
gap: 30px;
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