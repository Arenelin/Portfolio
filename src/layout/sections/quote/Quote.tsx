import styled from 'styled-components'
import { QuoteInfo } from './quoteInfo/QuoteInfo'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

export function Quote() {
   return (
      <StyledQuote>
         <Container>
            <QuoteInfo
               title={'quote of the day'}
               text={'“Success is not final; failure is not fatal: it is the courage to continue that counts.”'}
               author={'-Winston Churchill'} />
         </Container>
      </StyledQuote>
   )
}

const StyledQuote = styled.section`

@media ${theme.media.mobile}{
display: none;
}
`
