import styled from 'styled-components'
import QuoteSecond from '../../../../assets/images/QuoteSecond.svg'
import QuoteFirst from '../../../../assets/images/QuoteFirst.svg'

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
`
const QuoteTitle = styled.h2`
font-size: 100px;
font-weight: 300;
line-height: 150.023%;
letter-spacing: -4.8px;
text-transform: uppercase;
padding-top: 20px;
`

const Description = styled.p`
font-size: 28px;
line-height: 174%; 
max-width: 743px;
margin: 50px auto 30px;
`

const Author = styled.span`
`