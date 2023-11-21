import styled from 'styled-components'
import { theme } from '../styles/Theme'

export const SectionTitle = styled.h2`
font-size: 56px;
font-weight: 600;
letter-spacing: 3px;
position: relative;
text-align: center;
margin-bottom: 80px;

&::before{
   content: '';
   display: inline-block;
   width:175px;
   height: 1px;
   background-color: ${theme.colors.decor.primary};

   position: absolute;
   left: 50%;
   bottom: -20px;
   transform: translateX(-50%);
}
`