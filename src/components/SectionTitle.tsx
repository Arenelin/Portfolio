import styled from 'styled-components'
import { theme } from '../styles/Theme'
import { font } from '../styles/Common'

export const SectionTitle = styled.h2`
${font({ Fmax: 56, Fmin: 40, fw: 600, ls: 3 })};
position: relative;
text-align: center;
margin-bottom: 80px;

@media ${theme.media.laptop}{
     margin-bottom: 50px;
}

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
   @media ${theme.media.mobile}{
      bottom: -16px;
      width: 150px;
}
}
`