import styled from 'styled-components'
import { theme } from '../styles/Theme'
import { changeSize, font } from '../styles/Common'

export const SectionTitle = styled.h2`
${font({ PxMax: 56, PxMin: 40, fw: 600, ls: 3 })};
position: relative;
text-align: center;
margin-bottom: ${changeSize({PxMin: 50, PxMax: 80, Vmax: 1440, Vmin: 992})}; 

&::before{
   content: '';
   display: inline-block;
   width: ${changeSize({PxMax: 175, PxMin: 150, Vmax: 1440, Vmin: 576})}; 
   height: 1px;
   background-color: ${theme.colors.decor.primary};

   position: absolute;
   left: 50%;
   bottom: -18px;
   transform: translateX(-50%);
}
`