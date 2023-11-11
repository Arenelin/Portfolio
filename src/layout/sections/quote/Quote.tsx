import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { SectionTitle } from '../../../components/SectionTitle'
import { QuoteInfo } from './quoteInfo/QuoteInfo'

export function Quote() {
   return (
      <StyledQuote>
         <FlexWrapper jc='center'>
            <Icon iconId='quoteSecond' w='385' h='321' viewBox='0 0 385 321' />
            <QuoteInfo
               title={'quote of the day'}
               text={'“Success is not final; failure is not fatal: it is the courage to continue that counts.”'} 
               author={'-Winston Churchill'} />
            {/* need to change it! */}
            <Test> 
               <Icon iconId='quoteFirst' w='385' h='321' viewBox='0 0 385 321' />
            </Test>
            {/* need to change it! */}
         </FlexWrapper>
      </StyledQuote>
   )
}

const StyledQuote = styled.section`
background-color: #111;
max-width:1920px;
margin: 0 auto;

${SectionTitle}{
color: #EAEAEA;
text-align: center;
font-size: 120px;
font-style: normal;
font-weight: 300;
line-height: 150.023%;
letter-spacing: -4.8px;
text-transform: uppercase;
padding: 0;
margin: 0;
padding-top: 105px;
margin-bottom: 85px;
}
`

const Test = styled.div`
   align-self: end;
`
