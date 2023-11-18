import styled from 'styled-components'
import { SectionTitle } from '../../../../components/SectionTitle'
import { Icon } from '../../../../components/icon/Icon'

type QuoteInfoPropsType = {
   title: string,
   text: string,
   author: string
}

export function QuoteInfo(props:QuoteInfoPropsType) {
   return (
      <StyledQuoteInfo>
         <SectionTitle>{props.title}</SectionTitle>
         <Description>{props.text}</Description>
         <Author>{props.author}</Author>
      </StyledQuoteInfo>
   )
}

const StyledQuoteInfo = styled.div`
text-align: center;
align-self: start;
margin-bottom: 128px;
margin-left: 17px;
position: relative;
`

const Description = styled.p`
color: #EAEAEA;
font-size: 34px;
font-style: normal;
font-weight: 400;
line-height: 174%; 
padding: 0;
max-width: 743px;
margin: 0px auto 50px;
`

const Author = styled.span`
color: #EAEAEA;
`