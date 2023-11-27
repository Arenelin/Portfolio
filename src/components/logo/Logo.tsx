import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export function Logo() {
   return (
      <Link href="#" >
         <LogoName aria-label='Top of page'>Nikita Akmaykin</LogoName>
      </Link>
   )
}

const Link = styled.a`
transition: all .5s;
position: relative;
z-index: 100;
&:hover{
   transform: scale(1.1);
}
`

const LogoName = styled.span`
color: ${theme.colors.accentPrimary};
font-family: 'Alex Brush', sans-serif;
font-size: 32px;
filter: drop-shadow(3px 6px 10px ${theme.colors.shadow.accent});
`