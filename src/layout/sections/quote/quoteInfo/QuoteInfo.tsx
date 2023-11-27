import styled from 'styled-components'
import QuoteSecond from '../../../../assets/images/QuoteSecond.svg'
import QuoteFirst from '../../../../assets/images/QuoteFirst.svg'
import { changeSize, font } from '../../../../styles/Common'
import { theme } from '../../../../styles/Theme'

type QuoteInfoPropsType = {
   title: string,
   text: string,
   author: string
}

export function QuoteInfo(props: QuoteInfoPropsType) {
   return (
      <StyledQuoteInfo>
         <QuoteTitle>{props.title}</QuoteTitle>
         <Description>{props.text}</Description>
         <Author>{props.author}</Author>
      </StyledQuoteInfo>
   )
}

const StyledQuoteInfo = styled.div`
text-align: center;
position: relative;

&::after,
&::before{
content: '';
display: inline-block;
width: 193px;
height: 161px;
background-size: cover;
position: absolute;
z-index: 1;
}

&::after{
background-image: url(${QuoteFirst});
top: -5px;
left: -15px;

}

&::before{
background-image: url(${QuoteSecond});
bottom: -12px;
right: -10px;
}

@media ${theme.media.tablet}{
&::after,
&::before{
   display: none;
}
}
`
const QuoteTitle = styled.h2`
${font({ PxMax: 100, PxMin: 60, fw: 300, ls: -4.8, lh: 170})}
text-transform: uppercase;
padding-top: ${changeSize({PxMax: 20, PxMin: 0, Vmax: 1440, Vmin: 768})};
position: relative;
z-index: 2;

@media ${theme.media.laptop}{
   line-height: 150px;
}

@media ${theme.media.tablet}{
line-height: 72px;
}
`

const Description = styled.p`
${font({ PxMax: 28, PxMin: 20, lh: 40 })}
max-width: 743px;
margin: 1.5em auto 1.1em;
position: relative;
z-index: 2;
`

const Author = styled.span`
`