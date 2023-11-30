import { QuoteInfo } from './quoteInfo/QuoteInfo'
import { Container } from '../../../components/Container'
import React from 'react'
import { S } from './Quote_Styles'

export const Quote: React.FC = () => {
   return (
      <S.Quote>
         <Container>
            <QuoteInfo
               title={'quote of the day'}
               text={'“Success is not final; failure is not fatal: it is the courage to continue that counts.”'}
               author={'-Winston Churchill'} />
         </Container>
      </S.Quote>
   )
}