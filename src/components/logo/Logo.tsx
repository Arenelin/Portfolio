import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export function Logo() {
   return (
      <a href="#">
         <LogoName>Nikita Akmaykin</LogoName>
      </a>
   )
}

const LogoName = styled.span`
color: ${theme.colors.accentPrimary};
font-family: 'Alex Brush', 'sans-serif';
font-size: 32px;
font-weight: 400;
filter: drop-shadow(3px 6px 10px ${theme.colors.accentPrimary});
`
