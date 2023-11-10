import styled from 'styled-components'

export function Menu(props: { items: Array<string> }) {
   return (
      <StyledMenu>
         <ul>
            {props.items.map((item) => 
               <li key={item}>
                  <a href='#'>{item}</a>
               </li>
            )}
         </ul>
      </StyledMenu>
   )
}

const StyledMenu = styled.nav`

ul{
   display: flex;
   gap: 30px;
}

`